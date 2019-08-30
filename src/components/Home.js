import React from 'react'
import images from './images'


class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      currentImg: 0,
      images: images
    }
  }

  componentDidMount() {
    setInterval(() => {
      let currentImg = this.state.currentImg + 1
      currentImg === this.state.images.length ? currentImg = 0:null
      this.setState({ currentImg })
    }, 4000)
  }

  render() {
    return (
      <section>
        <section className="section home-container" id="background-change" style={{
          backgroundImage: `url(${images[this.state.currentImg]})`
        }}>
          <section className="section">
            <div className="container">

              <h1 className="title is-1 hometitle1 has-text-right"> Natura Products</h1>
              <h2 className="subtitle2 has-text-right">Become a consultant</h2>
            </div>

          </section>
        </section>
      </section>
    )
  }
}

export default Home
