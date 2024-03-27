import React from 'react'
import './Home.css'
import Service from '../services/Service'
import AboutPlanet from '../About our Planet/AboutPlanet'
function Home() {
    
  return (
    <div>


     <div className='homeContainer bg-banner  
            h-[100vh] bg-no-repeat  bg-cover '>
        <div className="descriptiom flex flex-col md:w-4/12 h-[100vh]
                md:justify-center items-center
                pt-24 md:pt-0 ml-4 md:ml-28 ">
            <p className='text-3xl md:text-4xl font-bold'>
                <span className='text-white'>MARKETING INSIGHTS WORTHY OF YOUR </span>
                <span className='text-cyan-600'>TIME AND ATTENTION</span>
            </p>
    
            <p className='text-gray-300 mt-10'>we have the dexterity to help our client's 
                    business create cost-effective,lucrative advertising campaigns</p>
              
            <button className='mt-24 px-5 border border-cyan-400 mr-60 md:-ml-36
                      py-2 text-cyan-600'>
                Know More
            </button> 
            </div>
        </div>
        <Service />
     <AboutPlanet />
            </div>
  
  )
}

export default Home