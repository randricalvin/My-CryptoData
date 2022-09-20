import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './Coins'
import iconsearch from "../assets/iconsearch.svg";


const CoinsList = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                setCoins(res.data)
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className='w-full'>
        <div className='flex justify-center'>
            <input
            className="bg-lightGrey h-10 w-1/3 pl-5 text-m focus:outline-none text-darkBlue focus:ring-2"
            type="search"
            onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
            }}
            name="search"
            placeholder="Search"
            onChange={handleChange}
            value={filteredCoins.name}
            />
            <button
            type="button"
            className="bg-lightGrey flex justify-center w-10"
            >
            <img
                src={iconsearch}
                alt="search"
                className="h-10 w-4"
            />
            </button>
        </div>
        <div className="overflow-x-auto">
            <div className="flex items-center justify-center">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-lg leading-normal w-1/5">
                                    <th className="py-3 px-6 text-center w-1/5">RANK</th>
                                    <th className="py-3 px-6 text-start w-1/5">NAME</th>
                                    <th className="py-3 px-6 text-end w-1/5">PRICE</th>
                                    <th className="py-3 px-6 text-end w-1/5">MARKET CAP</th>
                                    <th className="py-3 px-6 text-end w-1/5">TOTAL SUPPLY</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {filteredCoins.map(coin => {
            return (
                <Coins 
                key={coin.id}
                id = {coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                image={coin.image}
                supply={coin.total_supply}
                priceChange={coin.price_change_percentage_24h}
                rank={coin.market_cap_rank}
                />
            )
        }
        )}
    </div>
  )
}

export default CoinsList