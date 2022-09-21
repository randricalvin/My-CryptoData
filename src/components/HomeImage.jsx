import React from 'react'
import homeimage from '../assets/homeimage.png'

const HomeImage = () => {
  return (
    <div>
        <img className="mt-28" src={homeimage} alt="coins" style={{width: '33rem' }}/>
    </div>
  )
}

export default HomeImage