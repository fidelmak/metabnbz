import React from 'react'
import mbtoken from "./images/mbtoken.png"
import opensea from "./images/opensea.png"
import metamask from "./images/metamask.png"

function Line() {
  return (
    <div className='color h-13 w-full mb-8 '>
        <div className='flex justify-evenly p-1'>
            <img className='w-30 h-6' src={mbtoken} alt="" />
            <img className='w-30 h-6' src={metamask} alt="" />
            <img className='w-30 h-6' src={opensea} alt="" />
        </div>
    </div>
  )
}

export default Line