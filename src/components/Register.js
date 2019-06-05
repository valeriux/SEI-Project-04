import React from 'react'
import axios from 'axios'

class Register extends React.Component {


  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
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
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    console.log(this.state)
    return (
      <section className="image_register">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label_Username">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      name="username"
                      placeholder="eg: leela3000"
                      onChange={this.handleChange}
                    />
                  </div>


                </div>

                <div className="field">
                  <label className="label_Email">Email</label>
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
                  <label className="label_Password">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password"
                      type="password"
                      placeholder="eg: ••••••••"
                      onChange={this.handleChange}
                    />
                  </div>

                </div>

                <div className="field">
                  <label className="label_PasswordConf">Password Confirmation</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password_confirmation"
                      type="password"
                      placeholder="eg: ••••••••"
                      onChange={this.handleChange}
                    />
                  </div>

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

export default Register
