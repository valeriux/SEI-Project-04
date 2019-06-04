import React from 'react'
import axios from 'axios'

class UserEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { username, email, password, password_confirmation } = this.state.data
    const currentuser = { username, email, password, password_confirmation }
    axios.put(`/api/users/${this.props.match.params.id}`, currentuser)
      .then(res => {
        this.props.history.push(`/users/${res.data.id}`)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    console.log(this.state.data, 'this.state.data')
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      name="username"
                      value={this.state.data.username || ''} placeholder="eg: leela3000" onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      value={this.state.data.email || ''}
                      placeholder="eg: leela@planetexpress.nnyc" onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password"
                      type="password"
                      value={this.state.data.password || ''}
                      placeholder="eg: ••••••••" onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password_confirmation"
                      type="password"
                      value={this.state.data.password_confirmation || ''}
                      placeholder="eg: ••••••••" onChange={this.handleChange} />
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

export default UserEdit
