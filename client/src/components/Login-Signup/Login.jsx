import React from 'react'
import Header from '../Navbar/Header'

const Login = () => {
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
    return (
        <div>
            <div>
                <Header content={content} />
            </div>
        </div>
    )
}

export default Login