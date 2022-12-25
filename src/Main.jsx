import React from 'react'
import Card from './Card'
import fr1 from "./images/fr1.png"


function Main() {
  return (
    <div className='flex justify-center'>
        <h1 className=' font-bold text-2xl  font-rose  '>inspiration for your next adventure</h1>
        <Card img={<img src={fr1} alt="" />} rating={5} />
        

    </div>
  )
}

export default Main