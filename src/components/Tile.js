import React from 'react'

function Tile({ name, img, onClick, specialty, weight, greased, medal, className }) {
  //Set individual state
  //Onclick to change state


  return (
    <div className={className} onClick={onClick}>
      <h3>{name}</h3>
      <img src={img} alt={name} />

      {specialty &&(
        <div>
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight}</p>
          <p>Greased: {greased ? 'Yes' : 'No'}</p>
          <p>Highest Medal Achieved: {medal}</p>
        </div>
      )}

    </div>
  )
}

export default Tile
