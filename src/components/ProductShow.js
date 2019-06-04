import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../lib/Auth'

import ProductMap from './ProductMap'

class ProductShow extends React.Component{

  constructor(props){
    super(props)

    this.state={
      products: null
    }
    console.log(this.state.product, 'this.state. on the show pageeeeeeee')

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
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.product.user.id
  }


  render(){
    console.log(this.state, 'this.state. on the show page')
    const state = this.state.product
    if (!this.state.product) return null
    return (
      <section className="section show">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <h1 className="title is-1">{state.name}</h1>
            </div>
          </div>
          <hr />
          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image">
                <img src={state.image} alt={state.name} />
              </figure>
            </div>

            <div className="column is-half-desktop is-full-tablet">
              <div className="column is-half-desktop is-full-tablet">
                <h2 className="title is-6">Price: {state.price}</h2>
                <hr />
              </div>

              <div className="column is-half-desktop is-full-tablet">
                <h2 className="title is-6">Address: {state.address}</h2>
                <hr />
              </div>
              <div className="column is-one-half">
                <h2 className="title is-6">Description: {state.description}</h2>
                <hr />
              </div>


              {this.canModify() &&
              <div className="level-right">
                <Link to={`/products/${state.id}/edit`} className="button is-primary">Edit</Link>
                <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
              </div>
              }

              {!this.canModify() && <div>
                <button onClick={this.startConversation}>Check Availability</button>
              </div>}

            </div>
            <ProductMap data={state} />
          </div>
        </div>
      </section>
    )
  }
}

export default ProductShow
