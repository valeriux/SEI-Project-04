import React from 'react'

const ProductCard = ({ name, images, address }) => {
  return (
    <div className="card">

      <div className="card-header">
        <h3 className="topcard card-header-title">{name}</h3>
      </div>

      <div className="card-image">
        <figure className="image">
          <img src={images[0]} alt={name} />
        </figure>
      </div>

  

      <div className="card-content">
        <div className="content">
          <p className="bottomcard">Address: {address}</p>
        </div>
      </div>







    </div>
  )
}

export default ProductCard
