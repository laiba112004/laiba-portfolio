import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = ["Home", "About", "Projects", "Contact"]

  return (
    <header className="bg-[#0F172A]/80 backdrop-blur-md text-white fixed w-full z-50 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-white">Laiba</span>
          <span className="text-[#F59E0B]">Dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-lg uppercase tracking-wider">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative group text-gray-300 hover:text-white transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-gray-800 px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white transition uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>
      )}

    </header>
  )
}

export default Navbar