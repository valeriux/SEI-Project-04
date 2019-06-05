import React from 'react'
import SlideShow from 'react-image-show'

const Slider = (props) => {
  return (
    <SlideShow
      images={props.images}
      width="400px"
      imagesWidth="400px"
      imagesHeight="400px"
      imagesHeightMobile="56vw"
      thumbnailsWidth="500px"
      thumbnailsHeight="12vw"
      thumbnails fixedImagesHeight
      infinite
    />
  )
}

export default Slider
