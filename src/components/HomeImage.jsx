import React from 'react'
import homeimage from '../assets/homeimage.png'

const HomeImage = () => {
  return (
    <div>
        <img className="home-image" src={homeimage} alt="coins" style={{width: '32rem' }}/>
    </div>
  )
}

export default HomeImage