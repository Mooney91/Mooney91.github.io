'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    // <nav className="fixed top-0 w-full bg-white shadow-md flex justify-center">
    <nav className="navbar">
      <div className="flex justify-center md:justify-start space-x-4 p-4">
        {links.map((link) => {
            return (
            <Link
                key={link.name}
                href={link.href}
                className={pathname === link.href ? "bg-black text-white": "active"}
                >
                <p className="font-mono hidden md:block">|{link.name}|</p>
            </Link>
            );
        })}
      </div>
    </nav>
  );
}
