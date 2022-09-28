import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './Coins'
import "../App.css";


const CoinsList = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const [display, setDisplay] = useState(50)
    const [seeMore, setSeeMore] = useState(false)
    const [seeLess, setSeeLess] = useState(false)
    console.log (display)
    console.log (seeMore)


    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
            .then(res => {
                setDisplay(50)
                setCoins(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    
    useEffect (() => {
        if (display >= coins.length) {
            setSeeMore(false)
        } else {
            setSeeMore(true)
        }
    }, [display, coins])

    useEffect (() => {
        if (display <= 50) {
            setSeeLess(false)
        } else {
            setSeeLess(true)
        }
    }, [display])


    const handleChange = e => {
        setSearch(e.target.value)
    }


    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )


  return (
    <div className="font-sans w-full">
        <div className='flex justify-center my-20 search-bar'>
            <input
            className="bg-lightGrey h-10 lg:w-1/3 md:w-1/2 sm:w-2/3 pl-5 text-m focus:outline-none text-darkBlue focus:ring-2"
            type="search"
            onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
            }}
            name="search"
            placeholder="Search"
            onChange={handleChange}
            value={filteredCoins.name}
            />
        </div>
        <div className="overflow-x-auto">
            <div className="flex items-center justify-center">
                <div className="w-full lg:w-5/6">
                    <div className="shadow-xl">
                        <table className="min-w-max w-full table-auto h-14">
                            <thead className="">
                                <tr className="bg-[#201E50] text-white uppercase text-m">
                                    <th className="py-3 px-6 text-center w-1/6">RANK</th>
                                    <th className="py-3 px-6 text-start w-1/6">NAME</th>
                                    <th className="py-3 px-6 text-end w-1/6">PRICE</th>
                                    <th className="py-3 px-6 text-end w-1/6">MARKET CAP</th>
                                    <th className="py-3 px-6 text-end w-1/6">TOTAL SUPPLY</th>
                                    <th className="py-3 px-6 text-end w-1/6">PRICE CHANGE(24H)</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            {filteredCoins.slice(0, display).map(coin => {
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
                    change24h={coin.price_change_percentage_24h}
                    lastUpdate={coin.last_updated}
                    />
                )
            })}


            <div className="flex justify-center">
                <div className="flex justify-center my-8 mx-5">
                {seeMore && <button className="bg-[#201E50] text-white text-m w-28 h-10 rounded-full hover:bg-[#4540ca] transition duration-300 ease-in-out shadow-lg hover:scale-105" onClick={() => setDisplay(display + 50)}>View More</button>}
                </div>
                <div className="flex justify-center my-8">
                {seeLess && <button className="bg-[#201E50] text-white text-m w-28 h-10 rounded-full hover:bg-[#4540ca] transition duration-300 ease-in-out shadow-lg hover:scale-105" onClick={() => setDisplay(display - 50)}>View Less</button>}
                </div>
            </div>
    </div>
  )
}

export default CoinsList