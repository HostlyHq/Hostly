import { useState } from "react"
import { Link } from "react-router-dom"
import Copyrights from "../components/copyright"

export default function Signup () {
    const [ loginFormData, setLoginFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    function handleFormData (event) {
        event.preventDefault();
        const { name, value } = event.target;
        setLoginFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 h-screen p-0 xl:p-20 justify-between gap-10 2xl:gap-5 py-10
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="hidden xl:block relative bg-blue-600 rounded-md">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    gap-20 w-4/5 flex flex-col items-center">
                    <div className="relative flex items-center justify-between p-5 bg-white rounded-2xl w-[500px]">
                        <div className="rounded-2xl">
                            <img className="absolute top-[-110px] left-[-0px]" src="particles.svg" alt="" />
                            <p className="text-slate-950 text-2xl text-start font-semibold">Hosting</p>
                            <p className="slate-950 text-gray-400 text-start">Total Hosted sites</p>
                            <p className="text-slate-950 text-2xl font-semibold">9589+</p>
                        </div>
                        <div className="relative">
                            <img className="bg-gray-50 rounded-full" src="sign-up-counter-icon.svg"/>
                            <p className="absolute text-slate-950 text-2xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >35%</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Speady, Easy and Fast</h1>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="px-5 max-w-[700px] justify-self-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full" > 
                    <img className="hidden md:block justify-self-center xl:justify-self-end" src="hostly-logo.svg" alt="hostly logo" />
                    <div className="flex flex-col gap-3 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-950">Sign up for an account</h1>
                        <p className="text-18px text-slate-500">Your ideas, Live in seconds</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 justify-between mb-3">
                        <Link className="border border-slate-500 bg-white text-slate-950 px-7 py-3 rounded-md flex
                            items-center justify-center gap-3">
                            <span><img src="google-icon.svg" alt="Google icon" /></span>Sign Up with Google</Link>
                        <Link className="border border-slate-500 bg-white text-slate-950 px-7 py-3 rounded-md flex
                            items-center justify-center gap-3">
                            <span><img src="git-icon.svg" alt="Github icon" /></span>Sign Up with Github</Link>
                    </div>
                    <fieldset className="border-t border-slate-500 mb-10 w-4/5 justify-self-center">
                        <legend className="text-slate-500 px-2">or with e-mail</legend>
                    </fieldset>
                    <form className="max-w-512px flex flex-col gap-7"
                        action="">
                        <div className="flex flex-col lg:flex-row gap-9">
                            <input className="border border-gray-400 rounded-md px-2 py-3 w-full placeholder:text-gray-400
                                text-slate-950 outline-0 focus:border-blue-600 " 
                                type="text" 
                                name="firstName"
                                value={loginFormData.firstName}
                                onChange={handleFormData}
                                placeholder="First Name"/>
                            <input className="border border-gray-400 rounded-md px-2 py-3 w-full placeholder:text-gray-400
                                text-slate-950 outline-0 focus:border-blue-600" 
                                type="text" 
                                name="lastName"
                                autoComplete="family-name"
                                value={loginFormData.lastName}
                                onChange={(e) => handleFormData(e)}
                                placeholder="Last Name"/>
                        </div>
                        <input className="border border-gray-400 rounded-md px-2 py-3 w-full placeholder:text-gray-400
                            text-slate-950 outline-0 focus:border-blue-600" 
                            type="email" 
                            name="email"
                            autoComplete="email"
                            value={loginFormData.email}
                            onChange={(e) => handleFormData(e)}
                            placeholder="olivia@untitledui.com"/>
                        <input className="border border-gray-400 rounded-md px-2 py-3 w-full placeholder:text-gray-400
                            text-slate-950 outline-0 focus:border-blue-600" 
                            type="password" 
                            name="password"
                            autoComplete="password"
                            value={loginFormData.password}
                            onChange={(e) => handleFormData(e)}
                            placeholder="Password" />
                        <p className="text-gray-400">By creating an account, you agreeing to our <span className="text-slate-950">Privacy Policy</span></p>
                        <button className="bg-blue-600 text-white py-3 w-full rounded-md mt-3">Sign Up</button>
                    </form>
                    <div className="flex flex-col justify-between mt-15 sm:flex-row">
                        <p className="text-gray-500">Privacy Policy</p>
                        <p className="text-gray-500">Hostly &copy; {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}