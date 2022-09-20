import React from 'react'

const CoinDetailOne = (coinDetail) => {
  return (
    <div>
        <h1 className='text-2xl font-bold flex justify-center'>{coinDetail.name}</h1>
          <div className='flex justify-center'>
            <div className='flex'>
                {coinDetail.image ? <img src={coinDetail.image.small} alt={coinDetail.name} /> : null}
                <span>{coinDetail.name}</span>
                {coinDetail.symbol ? <span>{coinDetail.symbol.toUpperCase()}/USD</span> : null}
            </div>
            <div className='text-red-700'>
                {coinDetail.market_data?.current_price ? <span>${coinDetail.market_data.current_price.usd}</span> : null}
            </div>
          </div>
    </div>
  )
}

export default CoinDetailOne