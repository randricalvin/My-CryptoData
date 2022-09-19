import React from 'react'
import homeimage from '../assets/homeimage.png'

const HomeImage = () => {
  return (
    <div>
        <img src={homeimage} alt="coins" style={{width: '35rem' }}/>
    </div>
  )
}

export default HomeImage