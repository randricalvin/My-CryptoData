import React from 'react'
import { Link } from 'react-router-dom'
import logogo from '../assets/logogo.svg'

const ButtonStart = () => {
  return (
    <Link to="/market">
        <div className='flex justify-evenly items-center rounded-full bg-[#201E50] text-[#F5F4F2] text-2xl p-4 mt-10 w-1/2 hover:bg-[#4540ca] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
            <img src={logogo} alt="go" />    
            <h1>Get Started</h1>
        </div>
    </Link>
  )
}

export default ButtonStart