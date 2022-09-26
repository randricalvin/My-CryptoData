import React from 'react'

const News = ({
    title,
    description,
    image,
    link
}) => {
  return (
    <div className="font-sans flex justify-center my-10">
      <section className="bg-white lg:w-5/6">
          <div className="container px-6 py-5">
              <div className="lg:-mx-6 lg:flex lg:items-center">
                  <img className="object-cover w-full lg:mx-6 lg:w-1/3 rounded-xl lg:h-64" src={image}alt={title}/>
                  <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                      <h5 className="block mt-4 lg:text-2xl font-semibold text-gray-800 md:text-3xl">
                          {title}
                      </h5>
                      
                      <p className="my-5 lg:text-lg md:text-sm">
                          {description.substring(0, 200)}...
                      </p>
                      <div className="flex lg:justify-end md:flex justify-center ">
                          <a href={link} target="_blank" rel="noreferrer" className="bg-[#201E50] text-white py-2 px-4 text-m min-w-28 h-10 rounded-full hover:bg-[#4540ca] transition duration-300 ease-in-out shadow-lg hover:-translate-y-1 hover:scale-105] hover:text-white">Read More</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* <img class="object-cover" src={image} alt={title}></img>
        <div className="flex flex-col">
          <h5 class="">{title}</h5>
          <p class="">{description}</p>
        </div> */}
      {/* <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
      <a href={link}>Read more</a> */}
    </div>
  )
}

export default News