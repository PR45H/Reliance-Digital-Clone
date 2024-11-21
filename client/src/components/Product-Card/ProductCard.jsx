import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import StarRating from './StarRating'


const ProductCard = ({products}) => {
    return (
        <div className='grid grid-cols-4 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {products.smart_phones.map((product,index) => (
                <div className="hover:shadow-xl cursor-pointer rounded-xl w-full">

                    <Card className="text-[#003380] border-none" >
                        <div>
                            <img src={product.Images} alt={product.Products_name} className='p-5 w-56 transform transition-transform duration-500 hover:scale-110 m-auto'/>
                        </div>
                    <CardHeader>
                        <CardTitle className="font-normal truncate">{product.Products_name}</CardTitle>
                        <CardDescription>
                            <div className='flex gap-1 items-center'>
                                <StarRating rating={product.Stars} />
                                    <span>{ product.Ratings}</span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex items-center gap-3 mb-3'>
                                <p className='font-semibold'>&#8377;{product.New_Price}</p>
                                <p className='line-through text-gray-700 font-medium text-sm opacity-80'>{product.Old_Price}</p>
                            <span className='text-[#49A047] text-sm font-medium' >{product.Discounts}</span>
                        </div>
                            <div>
                                {product.Bank_Offers && <div className='w-fit bg-[#8cbd8b59] bg-opacity-20 border px-4 py-1 rounded-3xl border-[#49A047]'>
                                    <span className='text-[#49A047] font-normal text-[12px] '>{product.Bank_Offers}</span>
                            </div>}
                            
                        </div>
                    </CardContent>
                    {/* <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter> */}
                </Card>

            </div>    
            ))}
            
        </div>
    )
}

export default ProductCard

