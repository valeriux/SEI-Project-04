import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/Auth'
import ProductCard from './ProductCard'

class UserShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user.id
  }

  render() {
    console.log(this.state.user)
    if (!this.state.user.products) return null
    return(
      <section className="section">
        <div className="container">

          <div className="column is-desktop">
            {this.canModify() &&
          <div>
            <Link to={`/users/${this.state.user._id}/edit`} className="button is-info">Edit Profile
            </Link>
          </div>
            }
          </div>


          <div className="column is-two-thirds-desktop">
            <p className="subtitle is-3">{this.state.user.username}</p>
            <p className="subtitle is-3">{this.state.user.email}</p>

            <p className="subtitle is-3">My Shared</p>
            {this.state.user.products.map(product =>
              <div key={product.id} className="column is-one-third-desktop is-one-third-tablet">
                <Link to ={`/plants/${product.id}`}>
                  <ProductCard {...product} />
                </Link>
              </div>
            )}
          </div>


        </div>
      </section>
    )
  }
}

export default UserShow
