import React from 'react'

const CabinCard = (props) => {
  return (
    <div className="card">

      <div className="card-header">
        <h3 className="card-header-title">{props.name}</h3>
      </div>

      <div className="card-image">
        <figure className="image">
          <img src={props.image} alt={props.name}/>
        </figure>
      </div>

      <div className="card-header">
        <h3 className="card-header-title">{props.address}</h3>
      </div>



    </div>
  )
}

export default CabinCard
