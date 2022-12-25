import React from 'react'



function Card({img,rating}) {
  return (
    <div >
        <div>{img}</div>
        <div className='flex'>
        <span>
        <p>desert king</p>
        <p>2345km away</p>
        <div className='flex'>
        {
                Array(rating)
                .fill()
                .map((_)=>(
                    <p className='colori'>★</p>
                ))
            }</div>
    </span>
    <span className='flex '>
        <p>1MBT per night</p>
        <p>available for two weeks stay</p>
    </span>
    </div>
    </div>
  )
}

export default Card