import React from 'react'
import { Link } from 'react-router-dom'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_TOKEN
})


class IndexMap extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      pin: {},
      pinClick: false
    }
    console.log('token', process.env.MAPBOX_TOKEN)
  }

  handleMarkerClick(product) {
    if(product === this.state.selected) this.setState({ selectedProduct: null })
    else this.setState({ selectedProduct: product })
  }


  render() {
    console.log(this.props, 'IndexMap.PROPS')
    if (!this.props.products) {
      return <h1>  Loading...</h1>
    } else {
      return (
        <div className="location">
          <Map
            style='mapbox://styles/mapbox/streets-v8'
            center={[-0.25, 51.1010]}
            zoom={[8]}
            containerStyle={{
              height: '80vh',
              width: '80vw'
            }}
          >

            {this.props.products.map(product =>
              <Marker className="marker"
                key={product._id}
                coordinates={[product.longitude, product.latitude]}
                anchor="bottom"
                onClick={() => this.handleMarkerClick(product)}
              >
                <img src={'../images/pin.png'}/>
              </Marker>
            )}

            {this.state.selectedProduct &&
              <Link to ={`/products/${this.state.selectedProduct._id}`} key={this.state.selectedProduct._id}>
                <Popup className="popup"
                  coordinates={[this.state.selectedProduct.longitude, this.state.selectedProduct.latitude]}
                  offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}>

                  <div>
                    <h3>{this.state.selectedProduct.name}</h3>
                    <img className="popupimage"src={this.state.selectedProduct.image} alt={this.state.selectedProduct.name}/>
                  </div>
                </Popup>
              </Link>
            }

          </Map>
        </div>
      )
    }
  }
}

export default IndexMap
