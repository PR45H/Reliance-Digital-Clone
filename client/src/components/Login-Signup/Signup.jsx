import React, { useState } from 'react'
import Header from '../Navbar/Header'
import Navbar from '../Navbar/Navbar'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const { toast } = useToast()
    
    // handle form submission, send login request to server
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            console.log('Sending request to:', `${import.meta.env.VITE_API_URL}/user/register`);
            console.log('With data:', { firstName, lastName, email, password, mobile });
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/register`, { firstName, lastName, email, password, mobile });
            console.log(res.data)
            // store token in local storage
            // redirect to home page
            if (res.status == "201") {
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
                navigate('/login')
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response.status === 400) {
                toast({
                    variant: "destructive",
                    title: "User Registration Failed",
                    description: error.response.data.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
            if (error.response.status === 500) {
                toast({
                    variant: "destructive",
                    title: "User Registration Failed",
                    description: error.response.data.error,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
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
            <div className='flex justify-center p-4'>
                <div className='p-4'>
                    <Card className='w-[400px] shadow-xl flex flex-col gap-8'>
                        <CardHeader className='bg-gray-100 '>
                            <CardTitle>Register New Account</CardTitle>
                        </CardHeader>
                        <CardContent>
                            
                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-10 h-[100%]'>
                                    <Input onChange={(e)=>{setFirstName(e.target.value)}} type="text" placeholder="Enter First Name" className='w-full'  />
                                    <Input onChange={(e)=>{setLastName(e.target.value)}} type="text" placeholder="Enter Last Name" className='w-full'  />
                                    <Input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter Email Address" className='w-full'  />
                                    <Input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter Password" className='w-full' />
                                    <Input onChange={(e) => { setMobile(e.target.value) }} type="number" placeholder="Enter Mobile Number" className='w-full' />
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

export default Signup