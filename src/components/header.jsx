import { useState } from "react"

export default function Header() {
    const [ sidebar, setSidebar ] = useState(false)

    function showSidebar () {
        setSidebar( prevState => !prevState)
        console.log(sidebar)
    }

    return (
        <div className="relative">
            {sidebar ? '' : <header className=" group fixed flex px-0 md:px-10 justify-between
                bg-white shadow-white gap-10 left-0 right-0 overflow-hidden
                z-50 border-b-2 border-blue-600 mb-3">
                <div className="flex items-center justify-between w-full xl:w-fit">
                    <img className="w-35"
                        src="/WhatsApp Image 2025-08-10 at 14.47.43_676dfb90 1.svg" alt="hostly logo" />
                    <img className="w-8 xl:hidden cursor-pointer" src="/menu-icon.svg" alt="menu icon"
                        onClick={showSidebar}/>
                </div>
                <div className="content-center hidden xl:inline-block">
                    <nav className='header-navigation'>
                        <ul className='flex gap-5'>
                            <li className='header-list-item'>
                                <a className="text-gray-950 text-[18px] font-semibold" 
                                    href="#about">About</a>
                            </li>
                            <li className='header-list-item'>
                                <a className="text-gray-950 text-[18px] font-semibold" 
                                    href="#pricing">Products</a>
                            </li>
                            <li className='header-list-item'>
                                <a className="text-gray-950 text-[18px] font-semibold" 
                                    href="#pricing">Pricing</a>
                            </li>
                            <li className='header-list-item'>
                                <a className="text-gray-950 text-[18px] font-semibold"
                                    href="#contact">Contact us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="items-center gap-5 hidden xl:flex">
                    <button className="w-[143px] h-12 rounded-full bg-white
                        text-blue-600 border-2 border-solid hover:transform hover:translate-y-[-4px]
                        hover:bg-black hover:text-white hover:border-0 transition-all">Dashboard</button>
                    <button className="w-[143px] h-12 rounded-full bg-blue-600 text-white
                    hover:bg-black hover:text-white transition-all hover:transform 
                    hover:translate-y-[-4px]">Get Started</button>
                </div>
            </header>}
            
            {sidebar ?  <div className="flex-col bg-white min-h-screen z-20">
                <div className="absolute content-center top-7 left-[90%] w-10 h-10 cursor-pointer">
                    <img className="justify-self-center w-8" src="cancel-icon.svg"
                     onClick={showSidebar}/>
                </div>
                <div className="relative py-10 flex flex-col items-center gap-4">
                    <img className="w-35"
                        src="/public/WhatsApp Image 2025-08-10 at 14.47.43_676dfb90 1.svg"/>
                    <div className="flex flex-col w-full px-3">
                        <a className="text-blue-600 h-12 rounded-[3px] content-center
                            hover:bg-blue-600 hover:text-white transition-all" href="">Home</a>
                        <a className="text-blue-600 h-12 rounded-[3px] content-center
                            hover:bg-blue-600 hover:text-white transition-all" href="">About</a>
                        <a className="text-blue-600 h-12 rounded-[3px] content-center
                            hover:bg-blue-600 hover:text-white transition-all" href="">Products</a>
                        <a className="text-blue-600 h-12 rounded-[3px] content-center
                            hover:bg-blue-600 hover:text-white transition-all" href="#pricing">Pricing</a>
                        <a className="text-blue-600 h-12 rounded-[3px] content-center
                            hover:bg-blue-600 hover:text-white transition-all" href="">Contact us</a>
                    </div>
                </div>
                <div className="absolute w-full top-[95%]">
                        <p className="text-gray-600 text-center text-[14px]">Hostly Inc. Copyright 2025</p>
                    </div>
            </div> : ''}
        </div>
    )
}