import React from 'react'
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"

function Header() {

    
  return (
    <div className='flex justify-center'>
        <div className='w-2/5'>
            <h1 className='font'>Rent a <span className='colori'>Place</span> away from <span  className='colori'>Home</span> in the <span  className='colori'>Metaverse</span></h1>
            <p className='fonti '>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at comfort zone </p>
            
                
            <form className='flex'>   
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
   
                <input type="search" id="default-search" className="block w-96 p-4 pl-10 text-sm text-pink-800 border border-pink-800 rounded-l-lg bg-gray-50 focus:ring-pink-800 focus:border-pink-800 dark:bg-pink-800 dark:border-pink-800 dark:placeholder-pink-800 dark:text-white dark:focus:ring-pink-800 dark:focus:border-pink-800" placeholder="Search for location" required />
    
            <button type="submit" className="text-white  w-48 bottom-2.5 color hover:bg-pink-900 focus:ring-4 focus:outline-none focus:ring-pink-900 font-medium rounded-r-lg text-sm px-6 py-4 dark:bg-pink-900 dark:hover:bg-pink-900 dark:focus:ring-bg-pink-900">Search</button>
            </form>

            
        </div>




        <div className='ml-24 mb-8'>
            <div className='flex'>
                <div className='flex flex-col mt-24'>
                    <img className='px-2 w-48' src={img2} alt="" />
                    <img className='px-2 py-2 w-48' src={img1} alt="" />
                
                </div>
                <div className='flex flex-col '>
                    <img className='px-2 py-2 w-48' src={img4} alt="" />
                    <img className='px-2 w-48' src={img3} alt="" />
                
                </div>
            </div>

        </div>


    </div>
  )
}

export default Header