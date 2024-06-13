import React from 'react'

function Tile({name, img}) {

  return (
    <div>
      <h2>{name}</h2>
      <img src={img}></img>
    </div>
  )

}

export default Tile
