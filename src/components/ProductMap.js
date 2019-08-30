import React from 'react'
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl'

const mapBoxxToken = process.env.MAPBOX_TOKEN

const Map = ReactMapboxGl({
  accessToken: mapBoxxToken
})


class ProductMap extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: null
    }

  }

  render() {
    console.log(this.props.data.latitude)
    return (
      <Map
        style='mapbox://styles/mapbox/streets-v9'
        containerStyle={{
          width: '75vh',
          height: '50vh'
        }}
        center={[this.props.data.longitude, this.props.data.latitude]}
        zoom={[8]}
      >
        <Marker className="marker"
          coordinates={[this.props.data.longitude, this.props.data.latitude]}
          anchor="bottom">
          <img src={'images/Natura_Logo.png'}
          />
        </Marker>
        <Layer
          type='symbol'
          id='marker'
          layout={{ 'icon-image': 'marker-15' }}
        >
          <Feature coordinates={[this.props.data.longitude, this.props.data.latitude]}/>
        </Layer>
      </Map>

    )
  }
}

export default ProductMap
