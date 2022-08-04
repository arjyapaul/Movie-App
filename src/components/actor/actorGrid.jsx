import React from 'react'
import ActorCard from './actorCard'
import { FlexGrid } from '../styled'
import IMAGE_NOT_FOUND from '../../images/not-found.png'

const actorGrid = ({data}) => {
  return (
    <FlexGrid>
      {
        data.map(({person})=><ActorCard 
        key={person.id} name={person.name} country={person.country?person.country.name:null}
        birthday={person.birthday} deathday={person.deathday} gender={person.gender}
        image={person.image?person.image.medium:IMAGE_NOT_FOUND}/>)
      }
    </FlexGrid>
  )
}

export default actorGrid
