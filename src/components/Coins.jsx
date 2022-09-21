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
    rank,
    change24h,
    lastUpdate}
) => {
  return (
    <div className="font-sans">
        <div className="overflow-x-auto">
            <div className="min-w-screen flex items-center justify-center">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md">
                        <div className="min-w-max w-full table-auto">
                            <table className="min-w-max w-full table-auto h-14">
                                <tbody className="text-m font-medium">
                                    <tr className="border-b border-gray-200 hover:bg-[#4540ca13]">
                                        <td className="text-left whitespace-nowrap w-1/6">
                                            <div className="py-3 px-6">
                                                <div className="flex justify-center">
                                                    <span>#{rank}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-left whitespace-nowrap w-1/6">
                                            <div className="flex items-center justify-start">
                                                <div className="py-3 px-6 text-left">
                                                    <img className="w-8 h-8 rounded-full" src={image} alt="coin"/>
                                                </div>
                                            <Link to={`/market/${id}`}>
                                                <span>{name}</span>
                                            </Link>
                                            </div>
                                        </td>
                                        <td className="text-left whitespace-nowrap w-1/6">
                                            <div className="py-3 px-6">
                                                <div className="flex justify-end">
                                                    <span>${price.toFixed(2).toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 w-1/6">
                                            <div className="flex items-center justify-end">
                                                <span>${(marketcap/1000000000).toFixed(2)}B</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 w-1/6">
                                            <span className="flex items-center justify-end">{(supply/1000000).toFixed(2)}M</span>
                                        </td>
                                        <td className="py-3 px-6 w-1/6">
                                            {change24h < 0 ? (
                                                <span className="flex items-center justify-center text-red-500">
                                                    {change24h.toFixed(2)}%
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center text-green-500">
                                                    {change24h.toFixed(2)}%
                                                </span>
                                            )}
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