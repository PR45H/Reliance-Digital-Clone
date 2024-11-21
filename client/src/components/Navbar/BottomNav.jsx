import React from 'react'
import CategoryList from './categoryList'
import {mobiles_tablets, television, audio, home_appliances, computers, cameras, kitchen_appliances, personal_care, accessories} from './navbarCategoriesData'


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
            <div className='grid grid-flow-col'>
                <CategoryList product={mobiles_tablets} />
                <CategoryList product={television} />
                <CategoryList product={audio} />
                <CategoryList product={home_appliances} />
                <CategoryList product={computers} />
                <CategoryList product={cameras} />
                <CategoryList product={kitchen_appliances} />
                <CategoryList product={personal_care} />
                <CategoryList product={accessories} />
                
            </div>
            
        </div>
    )
}

export default BottomNav
