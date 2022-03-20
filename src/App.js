import React, { Component } from 'react'

import Header from './Header'
import Form from './Form'
import Ideas from './Ideas'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  deleteIdea = (id) => {
    this.setState({ ideas: this.state.ideas.filter((idea) => idea.id !== id) })
  }

  render() {
    return (
      <div>
        <Header />
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </div>
    )
  }
}

export default App
