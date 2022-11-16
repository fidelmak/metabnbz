import React from 'react'
import Home from "./images/Home.png"
import logo from "./images/logo.png"

//import {Link} from "react-router-dom"

function Nav() {
  return (
    <div className='flex mx-12 justify-center mt-11 mb-36'>
        <div className='flex mr-36'>
        <img className='w-w2 h-h2' src={Home} alt="" />
        <img className='w-w1 h-h1' src={logo} alt="" />
        
        </div>
        <div className='mt-3'>
            <ul className='flex '>
                <li >Home</li>
                <li className='ml-10'>Place to stay</li>
                <li className='ml-10'>NFTs</li>
                <li className='ml-10'>Community</li>
            </ul>
        </div>
        <button className='color ml-36 w-36 text-white rounded-xl p-2'>Connect wallet</button>



    </div>
  )
}

export default Nav