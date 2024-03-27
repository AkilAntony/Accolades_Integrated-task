import React, { useState } from 'react'

function Card({title,logo,description}) {
    const [hover, setHover] = useState(false);

  return (
     <div className={`cardContainer  md:w-2/5  w-11/12  h-80 flex mr-2 rounded shadow-md 
                     items-center
                     ml-2 flex-col mt-2 mb-2 p-1 ${hover ?' bg-gradient-to-t from-cyan-600 to-zinc-900-900 ': 'bg-zinc-800'} `}
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}>
                <img src={logo} 
                    className='mt-3'
                    alt="" />
                <p className='text-white font-bold text-2xl mt-3'>
                    {title}</p>
                <p className='text-center mt-4'>{description}
                </p>
            </div>
  )
}

export default Card