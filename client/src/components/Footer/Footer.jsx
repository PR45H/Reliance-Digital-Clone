import React from 'react'
import {productCategories, siteInfo, resourceCentre , policies} from './footerData'
import FooterLink from './FooterLink'
const Footer = () => {
    return (
        <div>
                {/* Footer Links */}
            <div className='w-full text-white grid grid-cols-4 bg-[#003380]'>
                <FooterLink productCategories={productCategories}/>
                <FooterLink productCategories={siteInfo}/>
                <FooterLink productCategories={resourceCentre}/>
                <FooterLink productCategories={policies}/>
                
            </div>

            {/* disclaimer  */}
            <div className='bg-[#0A244A] flex flex-col items-center text-center text-[13px] text-white'>
                <div>
                    <p className='p-1'>Disclaimer</p>
                </div>
                <div className='border border-opacity-50 w-16 border-b-white'></div>
                <div>
                    <p className='w-[70%] m-auto p-2'>
                            Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
                    </p>
                </div> 
                <div className='border border-opacity-80 w-full border-b-gray-900'></div>

                <div className='text-gray-500'>
                    <p >Designed & Maintained by</p>
                    <p>Prashant Babu</p>
                </div>

            </div>
        </div>
    )
}

export default Footer