import React from 'react'
import buttonback  from '../assets/buttonback.svg'


const BackButton = () => {
    const goBack = () => {
        window.history.back()
    }

  return (
    <div>
        <div className="button-back">
            <div className="flex items-center justify-center">
                <div className="lg:w-5/6 mt-10 mb-20 flex items-center justify-start">
                    <img src={buttonback} alt="back" onClick={goBack} className="bg-[#201E50] text-white py-2 px-4 text-m w-28 h-10 rounded-full hover:bg-[#4540ca] transition duration-300 ease-in-out shadow-lg hover:scale-105 hover:text-white cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackButton