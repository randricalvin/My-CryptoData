import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment/moment';
import BackButton from './BackButton';
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

    // adding the data to the chart
    const coinChartData = coinChart.prices ? coinChart.prices.map((value) => ({ x: value[0], y: value[1] })) : null

    
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
        <BackButton />
        <div className="flex items-center justify-center mb-20">
            <div className="w-full lg:w-5/6">
                <Line options={options} data={data} />
            </div>
        </div>
    </div>
  )
}

export default CoinChart