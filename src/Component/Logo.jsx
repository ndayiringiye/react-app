import React from 'react'

const Logo = () => {
  return (
    <div className='absolute top-96'>
        <p className='font-semibold text-xs'>@reallygreatsite</p>
        <div className='flex gap-2 '>
        <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="instagram" className='h-5  w-5' />
        <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000" alt="facebook"  className='h-5  w-5'/>
        <img src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000" alt="twitter" className='h-5  w-5' />
        <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="linkedin" className='h-5  w-5' />
        </div>
        
    </div>
  )
}

export default Logo