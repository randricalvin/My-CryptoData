import React from 'react'

const News = ({
    title,
    description,
    image,
    link,
    time,
    origin
}) => {
  return (
    <div className="cards-news font-sans flex justify-center my-10">
      <section className="bg-white lg:w-5/6 md:mx-5">
          <div className="px-6 py-5">
              <div className="lg:-mx-6 lg:flex lg:items-center lg:justify-around">
                  <img className="object-cover w-full lg:w-1/3 rounded-xl lg:h-64" src={image}alt={title}/>
                  <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                      <h1 className="block mt-4 lg:text-2xl font-semibold md:text-2xl title-article">
                          {title}
                      </h1>
                        <h2 className="font-extrabold my-4 text-[#201E50]">
                            {origin}
                        </h2>  
                      <p className="my-4 lg:text-lg text-justify md:text-sm">
                          {description.substring(0, 200)}...
                      </p>
                      <div className="flex lg:justify-end md:flex justify-center ">
                          <a href={link} target="_blank" rel="noreferrer" className="bg-[#201E50] text-white py-2 px-4 text-m min-w-28 h-10 rounded-full hover:bg-[#4540ca] transition duration-300 ease-in-out shadow-lg hover:scale-105 hover:text-white">Read More</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default News