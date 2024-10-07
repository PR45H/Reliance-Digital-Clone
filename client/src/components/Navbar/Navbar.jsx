import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'
import { RiSearch2Line, RiShoppingCart2Fill, RiUserFill } from "@remixicon/react";
import BottomNav from './BottomNav';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between bg-[#E42529] text-white text-[14px] font-semibold px-4 pb-2'>
                <div></div>
                <div className='flex items-center'>
                    <input type="text" placeholder='Find your favorite product' className='bg-white outline-violet-800 text-black px-4 py-2 rounded-full w-[705px]' />
                    <RiSearch2Line className='bg-white rounded-full ' color='gray' size={36}/>
                </div>
                <div>
                    <ul className='flex gap-4 py-1'>
                        <NavLink to='/'>Select your Pin Code</NavLink>
                        <div className='border-r border-opacity-70 border-white'></div>
                        <div >
                            <NavLink to='/' className='flex gap-2 '>
                                <div><RiShoppingCart2Fill color='white' size={18}/></div>
                                <div>Cart</div>
                            </NavLink>
                        </div>
                        <div className='border-r border-opacity-70 border-white'></div>
                        <div >
                            <NavLink to='/login' className='flex gap-2 '>
                                <div><RiUserFill color='white' size={18}/></div>
                                <div>Login</div>
                            </NavLink>
                        </div>
                    </ul>
                </div>
            </div>
            <BottomNav/>
        </div>
    )
}

export default Navbar