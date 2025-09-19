'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/logo/Digitallink Logo.png'
import { useEffect as useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

const dropdownMenus = {
  company: [
    { title: 'Overview and History', href: 'history' },
    { title: 'Careers', href: 'careers' },
    { title: 'Awards', href: 'award' },
  ],
  solutions: [
    { title: 'IT & AI Section', href: 'IT-AI' },
    { title: 'Elevator ELV Solution', href: 'Elevator-ELV' },
    { title: 'Audio and Visual Solution', href: 'Audio-Visual' },
    { title: 'Surveillance Solution', href: 'Surveillance' },
  ],
}

interface NavbarCategory {
  _id: string;
  name: string;
  slug: string;
  order: number;
  isActive: boolean;
  createdAt: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navRef = useRef<HTMLDivElement>(null)
  const [navbarCategories, setNavbarCategories] = useState<NavbarCategory[]>([])
  const [productsOpen, setProductsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const pathname = usePathname();
  const isHomeActive = pathname === '/'
  const isAboutActive = pathname?.startsWith('/About')
  const isContactActive = pathname?.startsWith('/Contact')
  const isProductsActive = navbarCategories.some((c) => pathname === '/' + c.slug || pathname?.startsWith('/' + c.slug + '/'))
  const isCompanyActive = ['/history', '/careers', '/award'].some((p) => pathname?.startsWith(p))
  const isSolutionsActive = ['/IT-AI', '/Elevator-ELV', '/Audio-Visual', '/Surveillance'].some((p) => pathname?.startsWith(p))


  // Prevent background scroll when mobile menu is open
  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const fetchNavbarCategories = async () => {
      try {
        const response = await fetch('/api/navbar-categories');
        const data = await response.json();
        setNavbarCategories(data);
      } catch (error) {
        console.error('Failed to fetch navbar categories:', error);
      }
    };

    fetchNavbarCategories();
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleDropdown = useCallback((dropdown: string | null) => {
    if (dropdown !== activeDropdown) {
      setActiveDropdown(dropdown)
    }
  }, [activeDropdown])

  

  const navigateWithReload = useCallback((url: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = url
    }
  }, [])

  return (
    <header
      className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300`}
      ref={navRef}
    >
      {/* Top bar - Always visible (no flickering) */}
      <div className="bg-gradient-to-r from-blue-900 to-black text-white py-2">
        <div className="container mx-auto flex flex-col sm:flex-row justify-end sm:space-x-8 space-y-2 sm:space-y-0 text-xs sm:text-sm font-medium">
          <a
            href="tel:+966597015415"
            className="flex items-center justify-center sm:justify-start hover:text-blue-300 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p>+966 59 701 5415</p>
          </a>
          <a
            href="mailto:sales@digitallink-sa.com"
            className="flex items-center justify-center sm:justify-start hover:text-blue-300 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            sales@digitallink-sa.com
          </a>
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Smooth size transition */}
          <Link
            href="/"
            className="flex items-center ml-0 sm:ml-8 transition-all duration-500 ease-in-out"
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(false)
              navigateWithReload('/')
            }}
          >
            <div className="relative h-12 sm:h-16 w-[220px] sm:w-[300px] group">
              <Image
                src={Logo.src}
                alt="Digital Link Technology Saudi Arabia"
                width={210}
                height={80}
                className="h-10 sm:h-14 w-auto object-contain group-hover:brightness-110 transition-all duration-300"
                priority
                quality={100}
                onLoad={() => setIsLoading(false)}
              />
              {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded" />
              )}
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 
              hover:shadow-md active:bg-gray-200 focus:outline-none focus:ring-2 
              focus:ring-red-500 focus:ring-opacity-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile menu content */}
          <div
            className={`md:hidden fixed inset-0 z-[9999] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => setIsOpen(false)}
            />
            {/* Menu Panel */}
            <div
              className={`absolute top-0 right-0 w-full max-w-sm h-full bg-gradient-to-b from-gray-50 to-white transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                <span className="text-lg font-semibold text-gray-900">Menu</span>
                <button
                  className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col px-3 py-4 overflow-y-auto h-[calc(100%-76px)]">
                <Link
                  href="/"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl mb-1 text-[15px] font-medium ${pathname === '/' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100/80 active:bg-gray-200'
                    } transition-all duration-200`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    navigateWithReload('/')
                  }}
                >
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                </Link>

                {/* Products Section */}
                <div className="mb-1">
                  <button
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium ${productsOpen ? 'bg-gray-100' : ''
                      } text-gray-700 hover:bg-gray-100/80 active:bg-gray-200 transition-all duration-200`}
                    onClick={() => setProductsOpen(!productsOpen)}
                    aria-expanded={productsOpen}
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="w-[18px] h-[18px] text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8 4-8-4m16 0l-8 4m8 4l-8 4m8-4l-8 4m8-4v10M4 7v10l8 4" />
                      </svg>
                      <span>Products</span>
                    </div>
                    <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${productsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-3 py-2 space-y-1">
                      {navbarCategories.map((category) => {
                        const url = `/${category.slug}`
                        return (
                          <Link
                            key={category._id}
                            href={url}
                            className={`flex items-center px-4 py-2.5 rounded-lg text-[14px] ${pathname === '/' + category.slug
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-600 hover:bg-gray-100 active:bg-gray-200'
                              } transition-all duration-200`}
                            onClick={(e) => {
                              e.preventDefault()
                              setIsOpen(false)
                              navigateWithReload(url)
                            }}
                          >
                            {category.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Our Company Section */}
                <div className="mb-1">
                  <button
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium ${companyOpen ? 'bg-gray-100' : ''
                      } text-gray-700 hover:bg-gray-100/80 active:bg-gray-200 transition-all duration-200`}
                    onClick={() => setCompanyOpen(!companyOpen)}
                    aria-expanded={companyOpen}
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="w-[18px] h-[18px] text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>Our Company</span>
                    </div>
                    <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${companyOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-3 py-2 space-y-1">
                      {dropdownMenus.company.map((item) => {
                        const url = `/${item.href}`
                        return (
                          <Link
                            key={item.href}
                            href={url}
                            className={`flex items-center px-4 py-2.5 rounded-lg text-[14px] ${pathname === '/' + item.href
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-600 hover:bg-gray-100 active:bg-gray-200'
                              } transition-all duration-200`}
                            onClick={(e) => {
                              e.preventDefault()
                              setIsOpen(false)
                              navigateWithReload(url)
                            }}
                          >
                            {item.title}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Solutions Section */}
                <div className="mb-1">
                  <button
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium ${solutionsOpen ? 'bg-gray-100' : ''
                      } text-gray-700 hover:bg-gray-100/80 active:bg-gray-200 transition-all duration-200`}
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    aria-expanded={solutionsOpen}
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="w-[18px] h-[18px] text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Solutions</span>
                    </div>
                    <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${solutionsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-3 py-2 space-y-1">
                      {dropdownMenus.solutions.map((item) => {
                        const url = `/${item.href}`
                        return (
                          <Link
                            key={item.href}
                            href={url}
                            className={`flex items-center px-4 py-2.5 rounded-lg text-[14px] ${pathname === '/' + item.href
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-600 hover:bg-gray-100 active:bg-gray-200'
                              } transition-all duration-200`}
                            onClick={(e) => {
                              e.preventDefault()
                              setIsOpen(false)
                              navigateWithReload(url)
                            }}
                          >
                            {item.title}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* About Us Link */}
                <Link
                  href="/About"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl mb-1 text-[15px] font-medium ${pathname === '/About' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100/80 active:bg-gray-200'
                    } transition-all duration-200`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    navigateWithReload('/About')
                  }}
                >
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>About Us</span>
                </Link>

                {/* Contact Button at Bottom */}
                <div className="mt-auto pt-4 px-3">
                  <Link
                    href="/Contact"
                    className={`flex items-center justify-center space-x-2 w-full px-4 py-3.5 rounded-xl text-[15px] font-medium bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-all duration-200`}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsOpen(false)
                      navigateWithReload('/Contact')
                    }}
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact Us</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 bg-white">
            {/* Home Link */}
            <div className="relative group">
              <Link
                href="/"
                className={`text-gray-800 hover:text-blue-600 font-medium transition-all duration-300 
                  hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:w-0 group-hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${isHomeActive ? 'text-blue-600 after:w-full' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigateWithReload('/')
                }}
              >
                Home
              </Link>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdown('products')}
              onMouseLeave={() => handleDropdown(null)}
            >
              <button className={`flex items-center text-gray-800 hover:text-blue-600 font-medium 
                transition-all duration-300 hover:-translate-y-0.5 group relative
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                group-hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${isProductsActive ? 'text-blue-600 after:w-full' : ''}`}>
                Products
                <svg className="w-4 h-4 ml-1.5 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-4 mt-2
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderTop: '2px solid #2563EB'
                }}
                role="menu"
              >
                {navbarCategories.map((category) => {
                  const url = `/${category.slug}`
                  return (
                    <Link
                      key={category._id}
                      href={url}
                      className={`block px-6 py-3 text-gray-800 hover:bg-blue-50 
                      hover:text-blue-600 transition-all duration-300 ${pathname === '/' + category.slug ? 'text-blue-600' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        navigateWithReload(url)
                      }}
                    >
                      {category.name}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Our Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdown('company')}
              onMouseLeave={() => handleDropdown(null)}
            >
              <button
                className={`flex items-center text-gray-800 hover:text-blue-600 font-medium 
                  transition-all duration-300 hover:-translate-y-0.5 group relative
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                  group-hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${isCompanyActive ? 'text-blue-600 after:w-full' : ''}`}
              >
                Our Company
                <svg className="w-4 h-4 ml-1.5 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-4 mt-2
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderTop: '2px solid #2563EB'
                }}
                role="menu"
              >
                {dropdownMenus.company.map((item) => {
                  const url = `/${item.href}`
                  return (
                    <Link
                      key={item.href}
                      href={url}
                      className={`block px-6 py-3 text-gray-800 hover:bg-blue-50 
                      hover:text-blue-600 transition-all duration-300 ${pathname === '/' + item.href ? 'text-blue-600' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        navigateWithReload(url)
                      }}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdown('solutions')}
              onMouseLeave={() => handleDropdown(null)}
            >
              <button
                className={`flex items-center text-gray-800 hover:text-blue-600 font-medium 
                  transition-all duration-300 hover:-translate-y-0.5 group relative
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                  group-hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${isSolutionsActive ? 'text-blue-600 after:w-full' : ''}`}
              >
                Solutions
                <svg className="w-4 h-4 ml-1.5 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-4 mt-2
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderTop: '2px solid #2563EB'
                }}
                role="menu"
              >
                {dropdownMenus.solutions.map((item) => {
                  const url = `/${item.href}`
                  return (
                    <Link
                      key={item.href}
                      href={url}
                      className={`block px-6 py-3 text-gray-800 hover:bg-blue-50 
                      hover:text-blue-600 transition-all duration-300 ${pathname === '/' + item.href ? 'text-blue-600' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        navigateWithReload(url)
                      }}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* About Us Link */}
            <div className="relative group">
              <Link
                href="/About"
                className={`text-gray-800 hover:text-blue-600 font-medium transition-all duration-300 
                  hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:w-0 group-hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${isAboutActive ? 'text-blue-600 after:w-full' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigateWithReload('/About')
                }}
              >
                About Us
              </Link>
            </div>

            {/* Contact Us Button */}
            <div className="relative group">
              <Link
                href="/Contact"
                className={`relative inline-flex items-center px-6 py-3 text-white font-medium 
                  rounded-lg overflow-hidden transition-all duration-300 ${pathname === '/Contact' ? 'bg-blue-700' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigateWithReload('/Contact')
                }}
              >
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 
                  translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                {/* Content */}
                <span className="relative flex items-center gap-3">
                  <svg
                    className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <span className="relative tracking-wider">
                    Contact Us
                  </span>
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 
                  transition-all duration-500 bg-gradient-to-r from-transparent 
                  via-white to-transparent -skew-x-12 translate-x-[-200%] 
                  group-hover:translate-x-[200%]" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar