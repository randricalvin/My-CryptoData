import React, {useState, useEffect} from 'react'
import axios from 'axios'
import linkedin from '../assets/footer/linkedin.svg'
import github from '../assets/footer/github.svg'
import linktree from '../assets/footer/linktree.svg'

const Footer = () => {
    const [coinFooter, setCoinFooter] = useState({})
    console.log (coinFooter)
    
    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
            .then(res => {
                setCoinFooter(res.data)
            })
            .catch(error => console.log(error))
    }, [])

  return (
    
        <div className='footer flex justify-between items-center h-20 sticky bg-[#201E50] text-white text-lg font-sans'>
            <div className="flex justify-around ml-4 data-footer1">
                {coinFooter[0] ? <div className='flex justify-center items-center'>
                    <img className='w-8 h-8 rounded-full mx-4 border-2' src={coinFooter[0].image} alt={coinFooter[0].name}/>
                    <span>{coinFooter[0].symbol.toUpperCase()} :</span>
                    <span>${coinFooter[0].current_price.toFixed(2)}</span>
                </div> : null}
                {coinFooter[1] ? <div className='flex justify-center items-center'>
                    <img className='w-8 h-8 rounded-full border-2 mx-4' src={coinFooter[1].image} alt={coinFooter[1].name}/>
                    <span>{coinFooter[1].symbol.toUpperCase()} :</span>
                    <span>${coinFooter[1].current_price.toFixed(2)}</span>
                </div> : null}
                {coinFooter[4] ? <div className='flex justify-center items-center'>
                    <img className='w-8 h-8 rounded-full border-2 mx-4' src={coinFooter[3].image} alt={coinFooter[3].name}/>
                    <span>{coinFooter[3].symbol.toUpperCase()} :</span>
                    <span>${coinFooter[3].current_price.toFixed(2)}</span>
                </div> : null}
            </div>

            <div className="data-footer2 flex gap-10">
                    <a href="https://www.linkedin.com/in/calvin-randrianantenaina-26986a118/" target="new_blank" rel="noreferrer">
                        <img className='w-10 transition duration-300 ease-in-out hover:scale-110' src={linkedin} alt="logo linkedin" />
                    </a>
                    <a href="https://github.com/randricalvin" target="new_blank" rel="noreferrer">
                        <img className='w-10 transition duration-300 ease-in-out hover:scale-110' src={github} alt="logo github" />
                    </a>
                    <a href="https://linktr.ee/randrianantenaina" target="new_blank" rel="noreferrer">
                        <img className='w-10 transition duration-300 ease-in-out hover:scale-110' src={linktree} alt="logo linktree" />
                    </a>
            </div>


            <div className="data-footer3 mx-4 pr-4">
                Made with <span className='text-red-500'>❤</span> by Calvin
            </div>   
        </div>
        
    )
}

export default Footer