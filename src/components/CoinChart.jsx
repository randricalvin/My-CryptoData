import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CoinChart = () => {
    const {id} = useParams()

    const [coinChart, setCoinChart] = useState({})
    console.log(coinChart)

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
        .then(res => {
            setCoinChart(res.data)
        })
        .catch(error => console.log(error))
    }, [id])

    const coinChartData = coinChart.prices ? coinChart.prices.map((value) => ({ x: value[0], y: value[1].toFixed(2) })) : null

    console.log (coinChartData)
    

  return (
    <div>
        chart
    </div>
  )
}

export default CoinChart