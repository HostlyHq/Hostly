import '../styles/footer.css'

export default function Footer () {
    return (
        <div className="flex flex-col py-10 justify-self-center ">
            <div className="grid grid-cols-1 lg:grid-cols-2 text-gray-950">
                <div className="justify-self-start">
                    <div>
                        <img className="w-[302px] h-[136px]"
                            src="/hostly-logo.svg" alt="" />
                    </div>
                    <div className="footer-description"></div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-4 justify-center gap-6">
                    <div>
                        <p className="text-1xl text-center lg:text-start font-bold mb-6">Services</p>
                        <nav className="flex flex-col">
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Domain</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Shared Hosting</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Cloud Hosting</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Private Hosting</a>
                        </nav>
                    </div>
                    <div>
                        <p className="text-1xl text-center lg:text-start font-bold mb-6">Services</p>
                        <nav className="flex flex-col">
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Static Hosting</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Wordpress</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Email Hosting</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Database</a>
                        </nav>
                    </div>
                    <div>
                        <p className="text-1xl text-center lg:text-start font-bold mb-6">Company</p>
                        <nav className="flex flex-col">
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">About</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Product</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Pricing</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Contact Us</a>
                        </nav>
                    </div>
                    <div>
                        <p className="text-1xl text-center lg:text-start font-bold mb-6">Help</p>
                        <nav className="flex flex-col">
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">FAQ</a>
                            <a className="mb-6 text-center h-6 lg:text-start hover:border-b-2
                                hover:border-b-blue-600" href="#">Help Support</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="lower-footer-section">
                <p className="text-gray-950 text-center lg:text-start text-[14px]">Hostly Inc. Copyright {new Date().getFullYear()}</p>
            </div>
        </div>  
    )
}