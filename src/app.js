import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {

  componentDidMount() {
    axios.get('/api/products')
      .then(res => this.setState({ products: res.data }))
  }

  render() {
    if(!this.state) return <p>Loading...</p>
    return (
      <div>
        {this.state.products.map(product => <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.image}</p>
          <p>{product.description}</p>
          <p>£{product.price.toFixed(2)}</p>
        </div>)}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
