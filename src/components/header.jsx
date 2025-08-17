import '../styles/header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="left-header-section">
                <img src="/WhatsApp Image 2025-08-10 at 14.47.43_676dfb90 1.svg" alt="" />
            </div>
            <div className="middle-header-section">
                <nav className='header-navigation'>
                    <ul className='header-list'>
                        <li className='header-list-item'>
                            <a href="#about">About</a>
                        </li>
                        <li className='header-list-item'>
                            <a href="#pricing">Products</a>
                        </li>
                        <li className='header-list-item'>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li className='header-list-item'>
                            <a href="#contact">Contact us</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right-header-section">
                <button className="dashboard-button header-button">Dashboard</button>
                <button className="get-started-button header-button">Get Started</button>
            </div>
            
        </header>
    )
}