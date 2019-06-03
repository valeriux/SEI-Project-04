import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/Auth'

class ProductShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      product: null
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then(res => this.setState({ product: res.data }))
  }

  handleDelete() {
    const token = Auth.getToken()
    axios.delete(`/api/products/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/products'))
  }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.product.user._id
  }


  render() {
    console.log(this.props, 'productshow.PROPS')
    const state = this.state.product
    if(!this.state.product) return null

    return (
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <h1 className="title is-1">{state.name}</h1>
            </div>
            {this.canModify() &&
              <div className="level-right">
                <Link to={`/products/${state._id}/ProductEdit`} className="button is-primary">Edit</Link>
                <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
              </div>
            }
          </div>
          <hr />

          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image">
                <img src={state.image} alt={state.name} />
              </figure>
            </div>


            <div className="media-content">
              <div className="content">
                <h2 className="title is-4"> {state.address}</h2>
              </div>
            </div>


          </div>
        </div>
      </section>
    )
  }
}

export default ProductShow
