import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchProduct from './SearchProduct'

import ProductCard from './ProductCard'
import IndexMap from './IndexMap'

class Index extends React.Component {

  constructor() {
    super()

    this.state = {
      products: [],
      view: 'map'
    }
    this.setView = this.setView.bind(this)
  }

  setView(view) {
    this.setState({ view })
  }

  componentDidMount() {
    axios('/api/products')
      .then(res => this.setState({ products: res.data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <SearchProduct products={this.state.product}/>
          <div className="level-left">
          
            <button className="button is-danger fas fa-map-marker-alt" onClick={() => this.setView('map')}>Map view</button>
            <button className="button is-danger fas fa-list" onClick={() => this.setView('list')}>List View</button>
          </div>
          {this.state.view === 'map' &&
            <IndexMap className="show" products={this.state.products}/>
          }
          {this.state.view === 'list' &&

          <div className="columns is-multiline">
            {this.state.products.map(product =>
              <div key={product.id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/products/${product.id}`}>
                  <ProductCard {...product} />
                </Link>
              </div>
            )}
          </div>
          }
        </div>
      </section>
    )
  }
}

export default Index
