import React, {useState, useEffect} from 'react'
import axios from 'axios'
import News from './News'


const NewsList = () => {
   const [infos, setInfos] = useState([])
   const [display, setDisplay] = useState(5)
    const [seeMore, setSeeMore] = useState(false)
    const [seeLess, setSeeLess] = useState(false)
    console.log (infos)
    console.log (display)


    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/news?")
        .then(res => {
            setDisplay(5)
            setInfos(res.data.data)
        })
        .catch((error) => console.log(error))
    }, [])

    useEffect (() => {
        if (display >= infos.length) {
            setSeeMore(false)
        } else {
            setSeeMore(true)
        }
    }, [display, infos])

    useEffect (() => {
        if (display <= 5) {
            setSeeLess(false)
        } else {
            setSeeLess(true)
        }
    }, [display])


  return (
    <div className="font-sans">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold flex justify-center mt-20 ">
            Latest crypto news
        </h1>
        <div className="">
            {infos.slice(0, display).map((info, index) => {
                return (
                <News
                key={index}
                id={info.id}
                title={info.title}
                description={info.description}
                image={info.thumb_2x}
                link={info.url}
                time={info.updated_at}
                origin={info.news_site}
                />
            )})}
        </div>
        <div className="flex justify-center">
                <div className="flex justify-center my-8 mx-5">
                {seeMore && <button className="bg-[#201E50] text-white text-m w-28 h-10 rounded-full hover:bg-[#4540ca] transition duration-300 ease-in-out shadow-lg hover:scale-105" onClick={() => setDisplay(display + 5)}>View More</button>}
                </div>
                <div className="flex justify-center my-8">
                {seeLess && <button className="bg-[#201E50] text-white text-m w-28 h-10 rounded-full hover:bg-[#4540ca] transition duration-300 ease-in-out shadow-lg hover:scale-105" onClick={() => setDisplay(display - 5)}>View Less</button>}
                </div>
            </div>
    </div>
)
}
export default NewsList