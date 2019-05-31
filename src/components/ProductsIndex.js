import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'

class ProductsIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('api/products')
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.data.map(product =>
              <div key={product._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to ={`/products/${product._id}`}>
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

export default ProductsIndex
