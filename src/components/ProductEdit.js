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

class ProductEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null,
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
  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()
    const {name, description, address, category_id, qty, price, image, postcode} = this.state.data
    const product = {name, description, address, category_id, qty, price, image, postcode}
    console.log(product, 'this is product being sent')


    axios.put(`/api/products/${this.state.data.id}`, product, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/products'))
      .catch(err => this.setState({ errors: err.response.data.errors }))

    console.log(this.state.data, 'this.state.data before sending')


  }

  componentDidMount() {
    axios.get(`api/products/${this.props.match.params.id}`)
      .then(res => {
        res.data.category_id = res.data.category.id
        this.setState({ data: res.data })
      })

    {
      axios.get('/api/categories')
        .then(res => this.setState({ categories: res.data }))
    }
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
    if(!this.state.data) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      name="name"
                      value={this.state.data.name || ''}
                      placeholder="eg: Hands Cream"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.name && <div className="help is-danger">{this.state.errors.name}</div>}


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
                  {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}
                </div>

                {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}
                <div className="field">
                  <label className="label">Price</label>
                  <div className="control">
                    <input
                      className="input"
                      name="price"
                      placeholder="eg: £200"
                      value={this.state.data.price || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.price && <div className="help is-danger">{this.state.errors.price}</div>}

                <div className="field">
                  <label className="label">QTY</label>
                  <div className="control">
                    <input
                      className="input"
                      name="qty"
                      placeholder="eg: 4"
                      value={this.state.data.qty || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.qty && <div className="help is-danger">{this.state.errors.qty}</div>}
                <div className="field">

                  <label className="label">Address</label>
                  <div className="control">
                    <input
                      className="input"
                      name="address"
                      placeholder="eg: 1 Seaside Avenue, Hastings"
                      value={this.state.data.address || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.address && <div className="help is-danger">{this.state.errors.address}</div>}

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



                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      type="textarea"
                      name="description"
                      placeholder="eg. Hand cream."
                      value={this.state.data.description || ''}
                      onChange={this.handleChange} />
                  </div>

                  {this.state.errors.description && <div className="help is-danger">{this.state.errors.description}</div>}
                </div>

                <div className="field">
                  <label className="label">Category</label>
                  <div className="select">
                    <select name="category_id" onChange={this.handleChange} value={this.state.data.category_id}>
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

                <button className="button is-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default ProductEdit
