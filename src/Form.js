import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = { title: '', description: '' }
  }

  handleTextInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  clearInputs = () => {
    this.setState({ title: '', description: '' })
  }

  submitIdea = (event) => {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      ...this.state
    }
    this.props.addIdea(newIdea)
    this.clearInputs()
  }

  render() {
    return (
      <div className='form-view'>
        <h2 className='form-title'>Where will your next idea take you?</h2>
        <label className='form-item' htmlFor='title'></label>
        <input
          required
          className='form-item'
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleTextInput}
        />
        <input
          required
          className='form-item'
          type='text'
          name='description'
          placeholder='description'
          value={this.state.description}
          onChange={this.handleTextInput}
        />
        <button onClick={this.submitIdea} className='form-item form-button'>
          Add Idea
        </button>
      </div>
    )
  }
}

export default Form
