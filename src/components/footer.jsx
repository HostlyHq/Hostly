import '../styles/footer.css'

export default function Footer () {
    return (
        <div className="flex flex-col py-10 justify-self-center">
            <div className="grid grid-cols-2 sm:grid-col-1 gap-20 text-gray-950">
                <div className="justify-self-center">
                    <div className="footer-image-container">
                        <img src="/public/WhatsApp Image 2025-08-10 at 14.47.43_676dfb90 1.svg" alt="" />
                    </div>
                    <div className="footer-description"></div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-4 justify-between gap-6">
                    <div>
                        <p className="text-1xl text-start font-bold mb-6">Services</p>
                        <nav className="flex flex-col">
                            <a className="footer-links" href="#">Domain</a>
                            <a className="footer-links" href="#">Shared Hosting</a>
                            <a className="footer-links" href="#">Cloud Hosting</a>
                            <a className="footer-links" href="#">Private Hosting</a>
                        </nav>
                    </div>
                    <div>
                        <p className="text-1xl text-start font-bold mb-6">Services</p>
                        <nav className="flex flex-col">
                            <a className="footer-links" href="#">Static Hosting</a>
                            <a className="footer-links" href="#">Wordpress</a>
                            <a className="footer-links" href="#">Email Hosting</a>
                            <a className="footer-links" href="#">Database</a>
                        </nav>
                    </div>
                    <div>
                        <p className="text-1x1 text-start font-bold mb-6">Company</p>
                        <nav className="flex flex-col">
                            <a className="footer-links" href="#">About</a>
                            <a className="footer-links" href="#">Product</a>
                            <a className="footer-links" href="#">Pricing</a>
                            <a className="footer-links" href="#">Contact Us</a>
                        </nav>
                    </div>
                    <div>
                        <p className="text-1xl text-start font-bold mb-6">Help</p>
                        <nav className="flex flex-col">
                            <a className="footer-links" href="#">FAQ</a>
                            <a className="footer-links" href="#">Help Support</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="lower-footer-section">
                <p className="text-gray-950 text-start">Hostly Inc. Copyright 2025</p>
            </div>
        </div>  
    )
}