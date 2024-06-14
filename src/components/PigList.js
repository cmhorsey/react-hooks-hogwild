import React, { useState } from 'react'
import Tile from './Tile'

function PigList({ hogs, allHogs }) {
  const [selectedHog, setSelectedHog] = useState(null)

  // console.log(hogs)
  // const [selectedHog, setSelectedHog] = useState(null)

  // When the user clicks on the hog tile, display the other details about the hog
  // (its specialty, weight, greased, and highest medal achieved)

  //ONClick on tile
  //Toggle additional props
  //send props to Tile




  function handleClick(hog) {
    console.log(`
    ${hog.name},
    ${hog.specialty}
    ${hog.greased}
    `)
    setSelectedHog(selectedHog === hog ? null : hog)
  }

  const createHogList = allHogs.map((hog) => {
    const isSelected = selectedHog === hog
    return (
      <Tile
        className='pigTile ui eight wide column'
        key={hog.name}
        name={hog.name}
        img={hog.image}
        onClick={() => handleClick(hog)}
        specialty={isSelected ? hog.specialty : null}
        weight={isSelected ? hog.weight : null}
        greased={isSelected ? hog.greased : null}
        medal={isSelected ? hog['highest medal achieved'] : null}
      />
    )
  })

  return (
    <div className='ui grid container'>
      {createHogList}
    </div>
  )
}

export default PigList
