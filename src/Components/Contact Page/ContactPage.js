import React from 'react'
import { FaEnvelope, FaHeart, FaMapMarker, FaPhone} from 'react-icons/fa'; 
function ContactPage() {
  return (
    <div className = 'bg-contact bg-cover h-[100vh] bg-no-repeat '>
        <div className='flex items-center justify-center h-[90vh] flex-col'>
             <p className='text-white text-3xl font-semibold'>CONTACT</p>
             <div className='bg-cyan-400 h-1 w-16 mt-2'></div>
        </div>
        <div className='bg-black flex items-center flex-col justify-center 
               '>
            <div className=' md:w-9/12 w-full'>
                <p className='text-cyan-600 text-base font-bold mt-10
                     md:mt-16 text-center'>
                    IDENTIFY AND CONNECTED
                </p>
                <p className='text-center text-white md:text-4xl 
                        font-bold text-2xl mt-5'>
                    Reach out to know the cost <br /> to attain your potential clients
                </p>


            {/* Location */}
                <p className='text-cyan-600 text-center font-bold md:text-3xl
                        text-xl mt-5
                '>
                    Corporate Office [Kochi, Kerala]
                </p>
                <div className='conact-for-Kochi flex md:justify-between
                        justify-center flex-wrap items-center mt-10'>
                    <div className='text-white flex flex-col items-center justify-center
                        md:mt-0 mt-10'>
                        <FaMapMarker className='text-cyan-500 text-center mb-2 text-2xl'/>
                        <p className='text-lg font-bold text-gray-400'>Accolades Integrated Pvt Ltd</p>
                        <p className='text-gray-500'>No.32/3071 – B | First Floor | Anjiparambil Building <br /> 
                            Ponnurunni | NH Bypass | Vyttila | Cochin – 682 019
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center
                        md:mt-0 mt-10'>
                        <FaEnvelope className='text-cyan-500 text-center 
                                text-2xl mb-2'/>
                        <p className='text-gray-500'>mail@accoladesmedia.co.in</p>
                    </div>

                    <div className='flex flex-col items-center justify-center
                        md:mt-0 mt-10'>
                        <FaPhone className='text-cyan-500 text-center 
                                text-2xl mb-2'/>
                        <p className='text-gray-500'>+91 90726 19922 | 87143 04849</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ContactPage