"use client"
import React, { useState } from 'react';
import { UserButton } from '@clerk/nextjs';

// You can replace these with your actual icons, e.g., from lucide-react
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Forum');

  const navLinks = [
    { name: 'Forum', href: '/forum' },
    { name: 'Chat', href: '/chat' },
    { name: 'About', href: '/about'},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / App Name */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold tracking-tighter text-gray-100">
                Baate
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  activeLink === link.name
                    ? 'text-white'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* User Button (Desktop) */}
          <div className="hidden md:block">
            <UserButton/>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeLink === link.name
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
             {/* User Button (Mobile) */}
            <div className="pt-4 pb-3 border-t border-gray-800">
                <div className="flex items-center px-2">
                    <UserButton/>
                    <div className="ml-3">
                        <div className="text-base font-medium text-white">User Name</div>
                        <div className="text-sm font-medium text-gray-400">user@example.com</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
