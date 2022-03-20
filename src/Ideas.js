import React from 'react'
import Card from './Card'

const Ideas = ({ ideas, deleteIdea }) => {
  const noIdeasYet = <h3>No ideas yet -- start your journey!</h3>
  const ideaCards = ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        key={idea.id}
        id={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })

  return <div className='ideas-view'>{!ideaCards.length ? noIdeasYet : ideaCards}</div>
}

export default Ideas
