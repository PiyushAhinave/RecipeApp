import React from 'react'

const Header = () => {
  return (
    <div className=' m-2 p-2 h-20 flex justify-between items-center border-b-2 shadow-lg'>
        <div className='flex text-slate-800 rounded-lg '>
            <img className='mx-2 h-10 '  src="https://img.icons8.com/color/48/cookbook.png" alt="cookbook"/>
            <h6 className='text-xl  font-bold pt-3'>Recipes</h6>
        </div>
        <div>    
            <button className=' text-slate-800 m-2 p-2  font-semibold'>🏠 Home</button>
            <button className=' text-slate-800 m-2 p-2  font-semibold'>🥣 Recipes</button>
        </div>
    </div>
  )
}

export default Header