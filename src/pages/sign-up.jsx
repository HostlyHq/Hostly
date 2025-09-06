import { useState } from "react"
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
        <div className="grid grid-cols-1 xl:grid-cols-2 min-h-screen p-20 justify-between gap-10 2xl:gap-5">
            <div className="hidden xl:block relative bg-blue-600 rounded-md">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    flex flex-col gap-20 w-4/5">
                    <div className="flex items-center justify-between px-5 bg-white rounded-2xl">
                        <div className="rounded-2xl">
                            <p className="text-slate-950 text-2xl text-start font-semibold">Hosting</p>
                            <p className="slate-950 text-gray-400 text-start">Total Hosted sites</p>
                            <p className="text-slate-950 text-2xl font-semibold">9589+</p>
                        </div>
                        <div>
                            <img className="bg-gray-50 rounded-full" src="sign-up-counter-icon.svg"/>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Speady, Easy and Fast</h1>
                    </div>
                </div>
            </div>
            <div className="px-10 justify-self-center w-2xl" > 
                <img className="justify-self-center xl:justify-self-end" src="hostly-logo.svg" alt="hostly logo" />
                <div className="flex flex-col gap-3 mb-8">
                    <h1 className="text-4xl font-bold text-slate-950">Sign up for an account</h1>
                    <p className="text-18px text-slate-500">Your ideas, Live in seconds</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 justify-between mb-3">
                    <button className="border border-slate-500 bg-gray-100 text-slate-950 px-7 py-3 rounded-md">Sign Up with Google</button>
                    <button className="border border-slate-500 bg-gray-100 text-slate-950 px-7 py-3 rounded-md">Sign Up with Github</button>
                </div>
                <fieldset className="border-t border-slate-500 mb-15 w-4/5 justify-self-center">
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
                    <button className="bg-blue-600 text-white py-3 w-full rounded-md mt-10">Sign Up</button>
                </form>
                <div className="flex justify-between top-4/5">
                    <p className="text-gray-500">Privacy Policy</p>
                    <p className="text-gray-500">Hostly &copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}