import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const CategoryList = ({ product }) => {
    return (
        <div className="bg-[#003380] py-2 text-white text-sm font-semibold w-full">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className="relative">
                        <NavigationMenuTrigger className="bg-[#003380] hover:bg-[#E42529]">
                            {product.map((category, index) => {
                                return <div key={index}>{category.title}</div>;
                            })}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-[#003380] text-white absolute left-1/2 transform -translate-x-1/2">
                            <NavigationMenuLink>
                                {product.map((category, index) => {
                                    return (
                                        <div key={index} className="grid grid-cols-3 w-[1024px]">
                                            {category.subCategories.map((subCategory, index) => {
                                                return (
                                                    <div key={index} className="flex-col p-5 gap-3 bg-[#003380] text-white w-full ">
                                                        <h1 className="font-semibold text-[16px] mb-3">{subCategory.title}</h1>
                                                        <div className="text-[14px]">
                                                            {subCategory.products.map((product, i) => {
                                                                return (
                                                                    <div key={i} className="mb-1 hover:text-gray-400 cursor-pointer">
                                                                        {product}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default CategoryList;
