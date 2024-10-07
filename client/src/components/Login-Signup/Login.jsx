import React, { useState } from 'react'
import Header from '../Navbar/Header'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import loginBanner from '../../assets/banners/LoginWebBanner.avif'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'
import axios from 'axios'

const Login = () => {
    // content for header
    const content = [{
        label: "OUR BRAND PROMISE",
        path: ""
    }, {
        label: "EASY RETURNS",
        path: "/cancellation-and-return-policy"
    }, {
        label: "NEXT DAY DELIVERY",
        path: ""
    }, {
        label: "SERVICE GUARANTEE",
        path: ""
    }, {
        label: "UNMATCHED NETWORK",
        path: ""
    }, {
        label: "Find a store",
        path: "/locateus"
    }, {
        label: "Contact Us",
        path: "/contactus"
        }]
    const [mobile, setMobile] = useState("");
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, {mobile})
        console.log(res);
    }
    
    return (
        <div>
            <div>
                <Header content={content} />
            </div>
            <div>
                <Navbar/>
            </div>
            <div className='flex justify-between p-4'>
                <div className=''>
                    <Banner images={loginBanner} />
                </div>
                <div className='p-4'>
                    <Card className='w-[400px]  flex flex-col gap-8'>
                        <CardHeader className='bg-gray-100 '>
                            <CardTitle>Login / Register</CardTitle>
                        </CardHeader>
                        <CardContent>
                            
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-10 h-[100%]'>
                                    <Input onChange={(e)=>{setMobile(e.target.value)}} type="number" placeholder="Enter mobile number" className='w-full' />
                                    <Button className='w-full bg-[#E42529] text-white' type='submit'>Proceed</Button>
                                </div>
                            </form>
                                
                          
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Login