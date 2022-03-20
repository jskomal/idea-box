import React from 'react'

const Card = ({ title, description, id, deleteIdea }) => {
  return (
    <div className='card'>
      <h4 className='card-title'>{title}</h4>
      <p className='card-description'>{description}</p>
      <button onClick={() => deleteIdea(id)} className='card-delete'>
        {'\u2573'}
      </button>
    </div>
  )
}

export default Card
