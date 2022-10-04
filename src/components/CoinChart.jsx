import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment/moment';
import Loader from './Loader';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const CoinChart = () => {
    const {id} = useParams()

    const [coinChart, setCoinChart] = useState([])

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
        .then(res => {
            setCoinChart(res.data)
        })
        .catch(error => console.log(error))
    }, [id])

    // adding loader to the chart if the data is not loaded yet
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     if (coinChart) {
    //         setLoading(false)
    //     }
    // }, [coinChart])

    // adding the data to the chart
    const coinChartData = coinChart.prices ? coinChart.prices.map((value) => ({ x: value[0], y: value[1].toFixed(2) })) : null

    
    const options = {
        responsive : true,
    }
    
    
    const data = {
        labels: coinChartData ? coinChartData.map((value) => moment (value.x).format('DD/MMM')): null,
        datasets: [
            {
                fill: true,
                label: id,
                data: coinChartData ? coinChartData.map((value) => value.y) : null,
                borderColor: '#4540ca',
                backgroundColor: '#4540ca13',
            },
        ],
    };

  return (
    <div>
        <Line options={options} data={data}/>
    </div>
  )
}

export default CoinChart