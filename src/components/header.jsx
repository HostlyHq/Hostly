import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white fixed left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="hostly-logo.svg"
            alt="Hostly logo"
            className="w-32 h-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-slate-700 font-medium hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Buttons (Desktop only) */}
        <div className="hidden xl:flex items-center gap-5">
          <button
            className="w-[143px] h-12 rounded-full border-2 border-black text-black bg-white hover:bg-black hover:text-white 
                        transition-all transform hover:-translate-y-1"
          >
            Dashboard
          </button>
          <button className="w-[143px] h-12 rounded-full bg-blue-600 text-white hover:bg-black transition-all transform hover:-translate-y-1">
            Get Started
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden p-2 text-gray-800"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 shadow-md animate-slide-down">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-blue-600 py-2 rounded hover:bg-blue-600 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 w-4/6 px-6 mt-4">
              <button className="w-full h-12 rounded-full border-2 border-blue-600 text-blue-600 bg-white hover:bg-black hover:border-0 hover:text-white transition ">
                Dashboard
              </button>
              <button className="w-full h-12 rounded-full bg-blue-600 text-white hover:bg-black transition">
                Get Started
              </button>
            </div>
          </nav>
          <p className="text-gray-500 text-sm text-center py-3 border-t">
            © {new Date().getFullYear()} Hostly Inc.
          </p>
        </div>
      )}
    </header>
  );
}
