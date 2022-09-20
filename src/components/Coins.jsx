import React from 'react'
import {Link} from 'react-router-dom'

const Coins = (
    {id,
    name,
    image,
    symbol,
    price,
    supply,
    priceChange,
    marketcap,
    rank}
) => {
  return (
    <div>
        <div className="overflow-x-auto">
            <div className="min-w-screen flex items-center justify-center">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded">
                        <div className="min-w-max w-full table-auto">
                            <table className="min-w-max w-full table-auto">
                                <tbody className="text-gray-600 text-lg font-medium">
                                    <tr className="border-b border-gray-200 hover:bg-gray-100 ">
                                        <td className="text-left whitespace-nowrap w-1/5">
                                            <div className="py-3 px-6">
                                                <div className="flex justify-center">
                                                    <span>#{rank}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-left whitespace-nowrap w-1/5">
                                            <div className="flex items-center justify-start">
                                                <div className="py-3 px-6 text-left">
                                                    <img className="w-10 h-10 rounded-full" src={image} alt="coin"/>
                                                </div>
                                            <Link to={`/market/${id}`}>
                                                <span className="font-medium">{name}</span>
                                            </Link>
                                            </div>
                                        </td>
                                        <td className="text-left whitespace-nowrap w-1/5">
                                            <div className="py-3 px-6">
                                                <div className="flex justify-end">
                                                    <span>${price.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 w-1/5">
                                            <div className="flex items-center justify-end">
                                                <span>${marketcap.toLocaleString()}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 w-1/5">
                                            <span className="flex items-center justify-end">{supply}</span>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</div>      

    </div>
  )
}

export default Coins