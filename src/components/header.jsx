
export default function Header() {
    return (
        <header className="fixed flex px-10 justify-between
            bg-white shadow-white gap-10 left-0 right-0
            z-50 border-b-2 border-blue-600 mb-3">
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