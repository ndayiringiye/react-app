import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='flex justify-between w-3/5 bg-[#e7dfd8] mx-auto py-4 text-center'>
              <div className='logo'>
                      <h2 className='ml-4 text-white font-bold text-xl'>Bio<span className='text-blue-400 font-bold text-xl'>Mark</span></h2>
              </div>
               <div className='flex justify-center gap-4  mx-8'>
                      <a href="">Home</a>
                      <a href="">Contact</a>
                      <a href="">Projects</a>
                      <a href="">Skills</a>
               </div>
         </nav>   
    </div>
  )
}

export default Header