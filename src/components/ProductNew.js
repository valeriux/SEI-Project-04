import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import ReactFilestack from 'filestack-react'

const choices = {
  accept: 'image/*',
  transformations: {
    rotate: true,
    crop: true,
    circle: true
  }
}

class ProductNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {},
      file: null,
      categories: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUploadedImages = this.handleUploadedImages.bind(this)
  }

  handleChange(e) {
    const data = {...this.state.data, [e.target.name]: e.target.value}
    this.setState({ data })
  }


  componentDidMount() {
    axios.get('/api/categories')
      .then(res => this.setState({ categories: res.data }))

  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.get(`https://api.postcodes.io/postcodes/${this.state.data.postcode}`)
      .then(res => {
        console.log(res.data.result)
        const { longitude, latitude } = res.data.result
        this.setState({ data: {...this.state.data, longitude, latitude} })
      })
      .then(() => {
        return axios.post('/api/products', this.state.data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
      })
      .then(() => this.props.history.push('/products'))
      .catch(err => this.setState({errors: err.response.data.errors}))

  }


  sortedCategories(){
    return this.state.categories.sort((a,b) => {
      if(a.name === b.name) return 0
      return a.name < b.name ? -1 : 1
    })
  }


  handleUploadedImages(result) {
    console.log(this.state.data)
    const data = { ...this.state.data, image: result.filesUploaded[0].url }
    this.setState({ data })
  }



  render() {
    console.log(this.state.data)
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">

              <h1 className="title is-3"> Add Products</h1>

              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="eg: products in Lima"
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.name && <div className="help is-danger">{this.state.errors.name[0]}</div>}
                </div>


                <div className="field">

                  <label className="label">Image</label>
                  <ReactFilestack
                    apikey="A0y7LFvTfTXGeE0Xy0f9vz"
                    buttonText="Upload Photo Product"
                    buttonClass="button"
                    options={choices}
                    preload={true}
                    onSuccess={this.handleUploadedImages}
                  />
                  {this.state.data.image && <img src={this.state.data.image} />}
                  {this.state.errors.image && <div className="help is-danger">{this.state.errors.image[0]}</div>}
                </div>

                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="description"
                      placeholder="eg: This is a hydratant hands cream"
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.description && <div className="help is-danger">{this.state.errors.description[0]}</div>}
                </div>


                <div className="field">
                  <label className="label">Price</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="price"
                      placeholder="20"
                      value={this.state.data.price || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.price && <div className="help is-danger">{this.state.errors.price[0]}</div>}


                <div className="field">
                  <label className="label">Qty</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="qty"
                      placeholder="20"
                      value={this.state.data.qty || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.qty && <div className="help is-danger">{this.state.errors.qty[0]}</div>}

                <div className="field">
                  <label className="label">Category</label>
                  <div className="select">
                    <select name="category_id" defaultValue="Choose a Category..." onChange={this.handleChange}>
                      <option disabled>Choose a category</option>
                      {this.sortedCategories().map(category =>
                        <option
                          key={category.id}
                          value={category.id}>
                          {category.name}
                        </option>
                      )}
                    </select>
                  </div>
                  {this.state.errors.category_id && <div className="help is-danger">{this.state.errors.category_id[0]}</div>}
                </div>


                <div className="field">
                  <label className="label">Address</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder="eg: 1 Seaside Avenue, Hastings"
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.address && <div className="help is-danger">{this.state.errors.address}</div>}
                </div>


                <div className="field">
                  <label className="label">Postcode</label>
                  <div className="control">
                    <input
                      className="input"
                      name="postcode"
                      placeholder="eg: SE1 4NN"
                      value={this.state.data.postcode || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.postcode && <div className="help is-danger">{this.state.errors.postcode}</div>}

                <button
                  className="button is-primary is-centered">
                      Add Product
                </button>
              </form>

            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default ProductNew
