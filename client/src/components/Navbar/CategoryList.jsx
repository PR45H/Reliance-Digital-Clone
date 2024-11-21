import React from "react";
// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
//   } from "@/components/ui/avatar";
  import { Button } from "@/components/ui/button";
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";

const CategoryList = ({ product }) => {
    return (
        <div className="flex flex-wrap bg-[#003380]">
      {product.map((category, index) => (
        <HoverCard key={index} >
          <HoverCardTrigger asChild>
            <Button variant="ghost" className="text-white font-semibold hover:bg-[#E42529]">
              {category.title}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-screen bg-[#003380] text-white">
            {/* <h4 className="text-lg font-bold mb-2">{category.title}</h4> */}
            <div className="grid grid-cols-5 gap-5">
              {category.subCategories.map((subCategory, subIndex) => (
                <div key={subIndex}>
                  <h5 className="text-md font-semibold">{subCategory.title}</h5>
                  <ul className="text-sm list-disc pl-4">
                    {subCategory.products.map((product, prodIndex) => (
                      <li key={prodIndex} className="hover:text-gray-300 cursor-pointer">
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default CategoryList;
