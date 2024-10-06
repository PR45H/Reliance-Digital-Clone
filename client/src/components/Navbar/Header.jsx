import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div>
                <div className='bg-[#E42529] flex justify-end text-white text-[14px] font-semibold px-4 py-2'>
                    <ul className='flex gap-4'>
                        <NavLink to='/'>Find a store</NavLink>
                        <div className='border-r border-opacity-70 border-white'></div>
                        <NavLink to='/'>Buying guides</NavLink>
                        <div className='border-r border-opacity-70 border-white'></div>
                        <NavLink to='/'>Contact us</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header