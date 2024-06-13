import React from 'react'
import Tile from './Tile'

function PigList({ hogs }) {
  console.log(hogs)

  const createHogList =
  hogs.map((hog) => {
    return <Tile name={hog.name} img={hog.image}/>
  })

  return (
    <div>
      {createHogList}
    </div>
  )

}

export default PigList
