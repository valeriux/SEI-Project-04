import React from 'react'
import axios from 'axios'
import ReactFilestack from 'filestack-react'


const choices = {
  accept: 'image/*',
  transformations: {
    rotate: true,
    crop: true,
    circle: true
  }
}

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUploadedImages = this.handleUploadedImages.bind(this)

  }

  handleChange(e) {
    const data =  {...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data: data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({errors: err.response.data.errors}))

      .then(() => {

        axios.put(`/api/users/${this.props.match.params.id}`, this.state.data)
          .then(res => {
            this.props.history.push(`/users/${res.data._id}`)
          })
          .catch(err => this.setState({ errors: err.response.data.errors }))

      })
  }

  handleUploadedImages(result) {
    console.log(this.state.data)
    const data = { ...this.state.data, photo: result.filesUploaded[0].url }
    this.setState({ data })
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input className="input" name="username" placeholder="eg: leela3000" onChange={this.handleChange} />
                  </div>

                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" name="email" placeholder="eg: leela@planetexpress.nnyc" onChange={this.handleChange} />
                  </div>

                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" name="password" type="password" placeholder="eg: ••••••••" onChange={this.handleChange} />
                  </div>

                </div>

                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control">
                    <input className="input" name="passwordConfirmation" type="password" placeholder="eg: ••••••••" onChange={this.handleChange} />
                  </div>

                </div>


                <div className="field">

                  <label className="label">Profile Photo</label>
                  <ReactFilestack
                    apikey="A0y7LFvTfTXGeE0Xy0f9vz"
                    buttonText="Upload your Photo"
                    buttonClass="button"
                    options={choices}
                    preload={true}
                    onSuccess={this.handleUploadedImages}
                  />
                  {this.state.data.photo && <img src={this.state.data.photo} />}
                </div>


                <div className="field">
                  <label className="label">Bio</label>
                  <div className="control">
                    <input className="input" name="bio" placeholder="eg: Hi. I'm Dave...." onChange={this.handleChange} />
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
