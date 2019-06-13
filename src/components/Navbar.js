import React from 'react'
import { Link, withRouter } from 'react-router-dom'


import Auth from '../lib/Auth'

class Navbar extends React.Component {
  constructor(props){
    super(props)

    this.state = { active: true}
    this.logout = this.logout.bind(this)
    this.toggleActive = this.toggleActive.bind(this)
  }
  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }
  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ active: false })
    }
  }


  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">

            <Link to="/" >
              <img  className="logo" src="images/leaf.png"/>

            </Link>

            <a role="button" className={`navbar-burger${this.state.active ? ' is-active' : ''}`} onClick={this.toggleActive}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>

            <div className="navbar-start">
              <Link to="/products" className="navbar-item">Check out our Products</Link>

              {Auth.isAuthenticated() && <Link to="/products/new" className="navbar-item">Add a Product</Link>}
            </div>

            <div className="navbar-end">


              {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Become a Consultant</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Log in</Link>}
              {Auth.isAuthenticated() &&<a className="navbar-item" onClick={this.logout}>Logout</a>}


              {Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().sub}`} className="navbar-item">My Account</Link>}
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)



//    {Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().sub}`} className="navbar-item">My Account</Link>}
