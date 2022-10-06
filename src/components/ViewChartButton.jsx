import React from 'react'
import { Link, useParams } from 'react-router-dom'


const ViewChartButton = () => {
    const { id } = useParams()

  return (
    <div>
        <Link to={`/market/${id}/chart`}>
            <button className="bg-[#201E50] text-white text-m w-28 h-10 rounded-full hover:bg-[#4540ca] transition duration-300 ease-in-out shadow-lg hover:scale-105">
                View Chart
            </button>
        </Link>
    </div>
  )
}

export default ViewChartButton