import React from 'react'
import ShowCard from './showCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'

const showGrid = ({data}) => {
  return (
    <div>
      {
        data.map(({show})=><ShowCard key={show.id} id={show.id} name={show.name} 
        image={show.image?show.image.medium:IMAGE_NOT_FOUND} summary={show.summary}/>)
      }
    </div>
  )
}

export default showGrid