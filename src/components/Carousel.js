import React from 'react'
import SlideShow from 'react-image-show'


const imagesCabins  =[
  'https://coolstays.imgix.net/18433.jpg?&h=700&fit=crop&auto=compress',
  'https://adorable-home.com/wp-content/uploads/2017/02/Fantasy-Bamboo-Cabin-9.jpg',
  'https://i1.wp.com/www.director.co.uk/wp-content/uploads/2016/11/dog-friendly-cary-arms-beach-huts.jpg?fit=1000%2C500&ssl=1',
  'https://adorable-home.com/wp-content/uploads/2017/02/Fantasy-Bamboo-Cabin-4.jpg',
  'https://adorable-home.com/wp-content/uploads/2015/06/Amazing-cabins-4-1024x683.jpg',
  'https://a0.muscache.com/im/pictures/dd496910-a0bd-4dc6-a82c-c1650d9a2430.jpg?aki_policy=xx_large',
  'https://hostunusual.com/?page_type=show_image&img=the-shepherd-hut-retreat-lakeside-hot-tub.jpg&w=800&h=520&canvas=frame&bgcolour=dadada&q=50',
  'http://www.godsavethepoints.com/wp-content/uploads/2017/11/Eagle-brae.jpg',
  'https://adorable-home.com/wp-content/uploads/2017/02/Bamboo-cabin.jpg',
  'https://loghouseholidays.co.uk/wp-content/uploads/2018/11/Lakeside-log-cabin.jpg'
]

const Slider = (props) => {
  console.log(props)
  return (
    <SlideShow
      images={imagesCabins}
      width="800px"
      imagesWidth="600px"
      imagesHeight="450px"
      imagesHeightMobile="56vw"
      thumbnailsWidth="920px"
      thumbnailsHeight="12vw"
      thumbnails fixedImagesHeight
      infinite
    />
  )
}

export default Slider
