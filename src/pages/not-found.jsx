import { Link } from "react-router-dom"
import Copyrights from "../components/copyright"

export default function NotFound () {
    return <div className="bg-gray-200 min-h-screen min-w-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Link to="/">
                    <img className="justify-self-center" src="hostly-logo.svg" alt="" />
                </Link>
                <h1 className="text-gray-400 text-9xl font-bold">404</h1>
                <h1 className="text-slate-800 text-3xl mb-7">Page not found</h1>
                <Link to="/" className="text-white bg-blue-600 py-3 px-6 rounded-full
                    hover:bg-blue-800">Go to Home</Link>
            </div>
        <div className="justify-self-center absolute top-[85%]">
            <Copyrights />
        </div>
            
    </div>
}