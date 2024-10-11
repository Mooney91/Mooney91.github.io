'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { name: 'Home', 
    href: '/'},
  {
    name: 'Education',
    href: '/cv/education',
  },
  { name: 'Work Experience', 
    href: '/cv/work'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'Contact',
    href: '/contact'
  }

];

export default function NavLinks() {
  const pathname = usePathname();

  // This is for the Hamburger
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  };


  return (
    <nav className="navbar fixed top-0 w-full bg-white shadow-md">
      <div className="flex justify-between items-center p-4">
        
        {/* Hamburger Icon for mobile */}
        <button className="block md:hidden focus:outline-none" onClick={toggleMenu}>
          {/* Simple Hamburger Icon */}
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </button>

        {/* Links - hidden on mobile */}
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={pathname === link.href ? 'bg-black text-white' : 'text-black'}
            >
              <p className="font-mono">|{link.name}|</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu - toggles when menuOpen is true */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white p-4`}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={pathname === link.href ? 'bg-black text-white block my-2' : 'text-black block my-2'}
            onClick={() => setMenuOpen(false)} // Close the menu on link click
          >
            <p className="font-mono">{link.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
