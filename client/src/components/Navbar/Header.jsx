import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({ content }) => {
    return (
        <div className='flex justify-end text-white text-[14px] font-semibold px-4 py-2'>
            <ul className='flex gap-4'>
                {content.map((item, index) => (
                    <React.Fragment key={item.path}>
                        <NavLink to={item.path}>{item.label}</NavLink>
                        {index < content.length - 1 && (
                            <div className='border-r border-opacity-70 border-white'></div>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}

export default Header