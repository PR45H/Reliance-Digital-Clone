import React, { useState } from 'react'
import Header from '../Navbar/Header'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import loginBanner from '../../assets/banners/LoginWebBanner.avif'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { toast } = useToast()
    
    // handle form submission, send login request to server
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            // console.log('Sending request to:', `${import.meta.env.VITE_API_URL}/user/login`);
            // console.log('With data:', { email, password });
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, { email, password });
            console.log(res.data)
            // store token in local storage
            // redirect to home page
            if (res.status == "200") {
                localStorage.setItem("Authorization", res.data.token)
                console.log(res.data.message )
                toast({
                    title: res.data.message,
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    style: {
                        background: '#038C07',
                        color: '#fff',
                    }
                });
                navigate('/')
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                toast({
                    variant: "destructive",
                    title: "Login Failed",
                    description: error.response.data.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
            if (error.response.status === 404) {
                toast({
                    variant: "destructive",
                    title: "Login Failed",
                    description: error.response.data.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
                navigate('/register')
            }
        }
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
                            
                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-10 h-[100%]'>
                                    <Input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter Email" className='w-full'  />
                                    <Input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter Password" className='w-full' />
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