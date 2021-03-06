import React from 'react'
import axios from 'axios'

import Auth from '../lib/Auth'
import Flash from '../lib/Flash'

class Login extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {

    const data = { ...this.state.data, [e.target.name]: e.target.value }

    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Flash.setMessage('success', res.data.message)
        this.props.history.push('/products')
      })
      .catch(() => this.setState({ error: 'Invalid credentials' }))
  }

  render() {
    console.log(this.state)
    return (
      <section className="image_login">
        <div className="container">
          <div className="columns is-centered">
            <div id="login_email" className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label_email">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      placeholder="eg: leela@planetexpress.nnyc"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label_password">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password"
                      type="password"
                      placeholder="eg: ••••••••"
                      onChange={this.handleChange}
                    />
                  </div>

                  {this.state.error && <div className="help is-danger">{this.state.error}</div>}
                </div>

                <button className="button is-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>


      </section>
    )
  }
}

export default Login
