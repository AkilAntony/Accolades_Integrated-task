import React, { useState } from 'react'
import Card from './Card'

function Service() {
     
    

  return (
    <div className='bg-black flex text-white w-full
            flex-wrap md:flex-nowrap pb-3'>

                {/* Left side */}
        <div className="section-1 ml-4 md:ml-28 md:w-1/3 mr-2 flex
                 justify center md:items-center  ">
            <div>
                <p className='text-base font-bold text-cyan-600 mb-5'>OUR SERVICES</p>
                    <p className='text-3xl text-white font-bold md:text-4xl'>What We 
                    <span className='text-cyan-600'> Do</span>
                </p>
                <div className='h-1 mt-1 bg-cyan-400 w-20 md:w-24'></div>
                    <p className='mt-5 text-left'>A strong, consistent brand, built up over time, is the best guarantee we can
                        assure you. Self, definition, transparency, authenticity and accountability 
                        are our keys to success. Convey your brand values and make your company more 
                        relatable, and translate into more leads, conversions, and sales.
                    </p>
                    <button className='text-white px-5 py-2 bg-cyan-500 mt-4
                        rounded'
                    >Know More</button>
                    </div>
            
                 </div>

    {/* Right side */}
        <div className="section-2 w-full md:w-2/3 flex flex-wrap justify-center mt-5">
            <Card logo='https://accoladesintegrated.com/wp-content/uploads/2022/06/Digital-Marketing.png' 
                title='Digital Marketing' 
                description='Get ROI through digital marketing services,
                    drive successful online marketing campaigns with our 
                    digital marketing services.'/>
            <Card title = 'Web Development'
                logo = 'https://accoladesintegrated.com/wp-content/uploads/2022/06/Web-Development.png'
                description='Get Customized Website Design specific to your business.
                 We design cross-browser compatibility websites with the latest features.'/>
            <Card title = 'Creative Design'
                logo = 'https://accoladesintegrated.com/wp-content/uploads/2022/06/Creative-Design.png'
                description = 'Whether you are looking for website design services or the management of
                    digital advertising campaigns, we are here to help.'/>
            <Card title = 'Brand Identity'
                logo = 'https://accoladesintegrated.com/wp-content/uploads/2022/06/Brand-Identity.png'
                description= 'A strong, consistent brand, built up over time, is the best 
                guarantee we can assure you. Self, definition, transparency, authenticity 
                and accountability are our keys to success. '/>
        </div>
        
    </div>
  )
}

export default Service