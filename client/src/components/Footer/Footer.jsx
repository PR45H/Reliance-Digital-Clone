import React from 'react'
import {productCategories} from './footerData'
const Footer = () => {
    return (
        <div>
            <div className='w-full text-white text-center'>
                {/* Footer Links */}
                <div className='bg-[#003380]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {productCategories.map((category, index) => (
                        <div key={index}>
                        <h3 className='text-[16px] font-semibold py-2'>{category.header}</h3>
                        <ul>
                            {category.products.map((product, productIndex) => (
                            <li key={productIndex} className='py-1 text-[15px] cursor-pointer hover:text-gray-300'>{product}</li>
                            ))}
                        </ul>
                        </div>
                    ))}
                </div>


                </div>
                {/* disclaimer  */}
                <div className='bg-[#0A244A] flex flex-col items-center text-[13px]'>
                    <div>
                        <p className='p-1'>Disclaimer</p>
                    </div>
                    <div className='border border-opacity-50 w-16 border-b-white'></div>
                    <div>
                        <p className='w-[65%] m-auto p-2'>
                            Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer