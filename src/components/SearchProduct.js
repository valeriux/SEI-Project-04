import React from 'react'
import axios from 'axios'
import Select from 'react-select'
import { withRouter } from 'react-router-dom'

class SearchProduct extends React.Component {

  constructor() {
    super()

    this.state = { products: [] }

    this.handleChange = this.handleChange.bind(this)
    this.loadProducts = this.loadProducts.bind(this)

  }

  componentDidMount(){
    this.loadProducts()
  }

  loadProducts(){
    axios.get('/api/products')
      .then(res  => this.setState({ products: res.data }))
      // .then(data => this.setState({ products: data }))
  }

  handleChange({ value }) {

    axios.get(`/api/products/${value}`)
      .then(res => {
        this.props.history.push(`/products/${res.data.id}`)

      })
  }

  render() {
    return(
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Select
              placeholder={'Select something'}
              onChange={this.handleChange}

              options={this.state.products.map(product=> {
                return {
                  value: product.id,
                  label: product.name
                }
              })
              }
            />
          </div>
        </div>



      </div>
    )
  }
}

export default withRouter(SearchProduct)
