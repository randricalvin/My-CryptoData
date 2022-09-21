import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CoinDetail = () => {
  const {id} = useParams()
  const [coinDetail, setCoinDetail] = useState({})
  const [coinData, setCoinData] = useState({})
  console.log (coinData)
  
  useEffect(() => {
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => {
          setCoinDetail(res.data)
          console.log(res.data)
      })
      .catch(error => console.log(error))
  }, [id])

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=hourly`)
    .then(res => {
        setCoinData(res.data)
        console.log(res.data)
    })
    .catch(error => console.log(error))
}, [id])

  return (
    <div className="font-sans">
        <div className="flex justify-center items-center mt-20">
            {coinDetail.market_cap_rank ? <span className="text-lg bg-[#4540ca] flex justify-center items-center text-[#F5F4F2] rounded-full" style={{minWidth : "2.5rem", minHeight : "2.5rem"}}>#{coinDetail.market_cap_rank}</span> : null}
            <h1 className='text-4xl font-bold flex justify-center items-center mx-2'>{coinDetail.name}</h1>
          </div>
            <div className='flex justify-around items-center my-16'>
              <div className='flex justify-center items-center text-2xl font-bold'>
                  {coinDetail.image ? <img className='w-10 h-10 rounded-full' src={coinDetail.image.small} alt={coinDetail.name}/> : null}
                  {coinDetail.symbol ? <span className='mx-4'>{coinDetail.symbol.toUpperCase()}/USD</span> : null}
              </div>
              <div className='text-2xl font-bold'>
                  {coinDetail.market_data?.current_price ? <span>${coinDetail.market_data.current_price.usd.toLocaleString()}</span> : null}
              </div>
            </div>
          <div className="overflow-x-auto">
            <div className="flex items-center justify-center">
                <div className="w-full lg:w-5/6">
                    <div className="bg-[#201E50] text-[#F5F4F2] shadow-xl">
                        <table className="min-w-max w-full table-auto mt-10 mb-28">
                          <thead>
                                <tr className="text-lg">
                                    <th className="py-3 px-6 text-center w-1/6">1H</th>
                                    <th className="py-3 px-6 text-center w-1/6">24H</th>
                                    <th className="py-3 px-6 text-center w-1/6">7D</th>
                                    <th className="py-3 px-6 text-center w-1/6">14D</th>
                                    <th className="py-3 px-6 text-center w-1/6">30D</th>
                                    <th className="py-3 px-6 text-center w-1/6">1Y</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                <tr>
                                    {/* 1h */}
                                    <td className="py-3 px-6 text-center w-1/6">{coinDetail.market_data?.price_change_percentage_1h_in_currency?.usd ? <span className={coinDetail.market_data.price_change_percentage_1h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}>{coinDetail.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</span> : null}</td>
                                    
                                    {/* 24h */}
                                    <td className="py-3 px-6 text-center w-1/6">{coinDetail.market_data?.price_change_percentage_24h_in_currency?.usd ? <span className={coinDetail.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}>{coinDetail.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</span> : null}</td>
                                      
                                    {/* 7d */}
                                    <td className="py-3 px-6 text-center w-1/6">{coinDetail.market_data?.price_change_percentage_7d_in_currency?.usd ? <span className={coinDetail.market_data.price_change_percentage_7d_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}>{coinDetail.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</span> : null}</td>
                                    
                                    {/* 14d */}
                                    <td className="py-3 px-6 text-center w-1/6">{coinDetail.market_data?.price_change_percentage_14d_in_currency?.usd ? <span className={coinDetail.market_data.price_change_percentage_14d_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}>{coinDetail.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</span> : null}</td>
                                    
                                    {/* 30d */}
                                    <td className="py-3 px-6 text-center w-1/6">{coinDetail.market_data?.price_change_percentage_30d_in_currency?.usd ? <span className={coinDetail.market_data.price_change_percentage_30d_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}>{coinDetail.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</span> : null}</td>
                                    
                                    {/* 1y */}
                                    <td className="py-3 px-6 text-center w-1/6">{coinDetail.market_data?.price_change_percentage_1y_in_currency?.usd ? <span className={coinDetail.market_data.price_change_percentage_1y_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}>{coinDetail.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</span> : null}</td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="flex items-center justify-center">
                      <div className="w-full lg:w-5/6">
                        <h1 className='text-2xl font-bold mb-5'>About</h1>
                        <span>{coinDetail.description ? <p className="text-justify mb-20">{coinDetail.description.en}</p> : null}</span>
                      </div>
                  </div>
  </div>
)
}

export default CoinDetail