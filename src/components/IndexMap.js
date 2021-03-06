import React from 'react'
import { Link } from 'react-router-dom'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'

const mapBoxxToken = process.env.MAPBOX_TOKEN

const Map = ReactMapboxGl({
  accessToken: mapBoxxToken
})

class IndexMap extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      pin: {},
      pinClick: false
    }
    console.log('tokennnnnnnn', process.env.MAPBOX_TOKEN, 'helloooooo')
  }

  handleMarkerClick(product) {
    if(product === this.state.selectedProduct) this.setState({ selectedProduct: null })
    else this.setState({ selectedProduct: product })
  }


  render() {
    if (!this.props.products) {
      return <h1>  Loading...</h1>
    } else {
      return (
        <div className="location">
          <Map
            style='mapbox://styles/mapbox/streets-v8'
            center={[-0.07352, 51.51541]}
            zoom={[10.5]}
            containerStyle={{
              height: '80vh',
              width: '80vw'
            }}
          >

            {this.props.products.map(product =>
              <Marker className="marker"
                key={product.id}
                coordinates={[product.longitude, product.latitude]}
                anchor="bottom"
                onClick={() => this.handleMarkerClick(product)}
              >
                <img src={'images/Natura_Logo.png'}/>
              </Marker>
            )}

            {this.state.selectedProduct &&
              <Link to ={`/products/${this.state.selectedProduct.id}`} key={this.state.selectedProduct.id}>
                <Popup className="popup"
                  coordinates={[this.state.selectedProduct.longitude, this.state.selectedProduct.latitude]}
                  offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}>

                  <div>
                    <h3 className="names">{this.state.selectedProduct.name}</h3>
                    <img className="popupimage"src={this.state.selectedProduct.images[0]} alt={this.state.selectedProduct.name}/>
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
