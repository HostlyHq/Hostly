
export default function Header() {
    return (
        <header className="relative flex px-4 py-5 rounded-full justify-between
            bg-white my-22 top-12 shadow-white">
            <div className="flex justify-center">
                <img src="/WhatsApp Image 2025-08-10 at 14.47.43_676dfb90 1.svg" alt="" />
            </div>
            <div className="content-center">
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
            <div className="flex items-center gap-5">
                <button className="w-[143px] h-12 rounded-full bg-white
                    text-blue-600 border-2 border-solid">Dashboard</button>
                <button className="w-[143px] h-12 rounded-full bg-blue-600 text-white">Get Started</button>
            </div>
            
        </header>
    )
}