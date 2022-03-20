import React from 'react'
import coverImg from './images/union-station.jpg'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='main-title'>Idea Box</h1>
      <img src={coverImg} alt='union station' className='cover-img' />
    </div>
  )
}

export default Header
