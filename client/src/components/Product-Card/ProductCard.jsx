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


const ProductCard = () => {
    return (
        <div >
            <div className="hover:shadow-xl rounded-xl border-2 w-[450px]">
                <div>
                    <img src="https://www.reliancedigital.in/medias/OnePlus-Nord-CE-3-Lite-MOB-493665925-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzUyMXxpbWFnZS9qcGVnfGltYWdlcy9oODMvaDU1Lzk5ODA3Mjk0NTg3MTguanBnfDkwNjYzNjhhODQxMzllYmNlZGMwYzQ0YjllNmEwZWQwNzIxNDk0OGFkOTFiZjU4MTU2N2FlMjg3YzFmMTBmZGQ" alt="oppo nord CE 3" className='p-5 w-56 transform transition-transform duration-500 hover:scale-110 m-auto'/>
                </div>
                <Card className="text-[#003380]" >
                    <CardHeader>
                        <CardTitle className="font-normal">OnePlus Nord CE 3 Lite 5G 256 GB, 8 GB RAM, Pastel Lime, Mobile Phone</CardTitle>
                        <CardDescription>
                            <div className='flex gap-1'>
                                <StarRating rating={4} />
                                <span>(475)</span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

            </div>
        </div>
    )
}

export default ProductCard