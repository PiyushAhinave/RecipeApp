import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-2 h-20 mb-5 flex justify-between items-center'>
        <div className='flex text-slate-800 rounded-lg '>
            <img className='mx-2 h-20 '  src="https://thumbs.dreamstime.com/b/inspirational-handwritten-brush-lettering-cook-book-vector-calligraphy-stock-illustration-isolated-white-background-typography-187510174.jpg" alt="cookbook"/>
            {/* <h6 className='text-xl  font-bold pt-3'>Recipes</h6> */}
        </div>
        <div>    
          <Link to={"/"}>  <button className=' text-slate-800 m-2 p-2  font-semibold'>Home</button></Link>
          <Link><button className=' text-slate-800 m-2 p-2  font-semibold'>About</button></Link>
        </div>
    </div>
  )
}

export default Header