
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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
        <div>
            <div className='bg-[#003380] py-2 text-white text-[14px] font-semibold flex justify-evenly'>
                {/* <div className='flex justify-evenly'>
                    {categories.map((category) => {
                        return <>
                            <div className='flex items-center gap-1'>{category.name} <RiArrowDropDownLine/></div>
                            
                        </>
                    })}
                    
                </div> */}
                <NavigationMenu>
                    <NavigationMenuList>
                        {categories.map((category, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuTrigger className='hover:bg-[#E42529]'>
                                    {category.name}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
        </div>
    )
}

export default BottomNav