import React from 'react'


const FooterLink = ({productCategories}) => {
    return (
        <div>
            <div>
                <div className='w-fit px-8 py-4'>
                    <div>
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


            </div>
        </div>
    )
}

export default FooterLink