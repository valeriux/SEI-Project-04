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
    if (!this.state.user.username) return null
    return(
      <section className="section user-background">

        <div className="container userProfile">

          <div className="columns is-multiline columns-userShow">

            <div className="column is-one-third-desktop img-userProfile">

            </div>
            <div className="column is-two-thirds-desktop">
              <p className="subtitle is-3">Welcome back {this.state.user.username}</p>

              <p className="subtitle">Email:{this.state.user.email}</p>
              <br />
              <br />
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-full-desktop">
            </div>

            <div className="column is-desktop products">
              {this.canModify() &&
          <div>
            <br />
            <br />
            <Link to={`/users/${this.state.user.id}/edit`} className="button is-info editButton">Edit Profile
            </Link>
          </div>
              }


              <div className="container">
                <div className="columns is-multiline">
                  <div className="column is-full-desktop">
                    <br />
                    <br />
                    <p className="subtitle is-3">My Products</p>
                  </div>
                  {this.state.user.products.map(product =>
                    <div key={product.id} className="column is-one-third-desktop is-one-third-tablet">
                      <Link to ={`/products/${product.id}`}>
                        <ProductCard {...product} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default UserShow
