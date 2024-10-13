import React from 'react'
import CategoryList from './categoryList'
import {mobiles_tablets, television, audio, home_appliances, computers} from './navbarCategoriesData'


const BottomNav = () => {
    const categories = [
        {name: "Mobiles & Tablets"},
        {name: "Televisions"},
        {name: "Audio"},
        {name: "Home Appliances"},
        {name: "Computers"},
        {name: "Cameras"},
        {name: "Kitchen Appliances"},
        {name: "Personal Care"},
        {name: "Accessories"},
    ]
    return (
        <div className=' '>
            {/* {console.log(mobiles_tablets)} */}
            <div className='grid grid-cols-9'>
                <CategoryList product={mobiles_tablets} />
                <CategoryList product={television} />
                <CategoryList product={audio} />
                <CategoryList product={home_appliances} />
                <CategoryList product={computers} />
                <CategoryList product={computers} />
            </div>
            
        </div>
    )
}

export default BottomNav
