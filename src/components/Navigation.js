'use client'

import { useState } from 'react'
import Link from 'next/link'
import LoginModal from '@/components/LoginModal'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const menuItems = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'เกี่ยวกับเรา', href: '/about' },
    { name: 'สินค้า', href: '/products' },
    { name: 'โปรโมชั่น', href: '/promotion' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#eee3dc] shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#8b5e4b] to-[#c89f91] text-white font-serif font-bold text-xl shadow-md">
                A
              </div>

              <div>
                <h1 className="text-xl font-bold text-[#3d302b]">
                  Aura
                </h1>

                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a67c68]">
                  Collection
                </p>
              </div>
            </Link>


            {/* ขวามือ */}
            <div className="flex items-center gap-2">

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1 mr-3">

                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-[#3d302b] rounded-full transition-all duration-200 hover:bg-[#f3eee9] hover:text-[#8b5e4b]"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>


              {/* ตะกร้า */}
              <Link
                href="/cart"
                className="relative p-2.5 rounded-full text-[#3d302b] hover:bg-[#f3eee9] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8b5e4b] text-[10px] font-bold text-white">
                  3
                </span>
              </Link>


              {/* Login */}
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="hidden md:block rounded-full bg-[#3d302b] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#8b5e4b] transition"
              >
                เข้าสู่ระบบ
              </button>


              {/* Mobile Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-full text-[#3d302b] hover:bg-[#f3eee9]"
                aria-label="เปิดเมนู"
              >
                <div className="space-y-1.5">

                  <span
                    className={`block h-0.5 w-5 bg-current transition ${
                      isOpen ? 'translate-y-2 rotate-45' : ''
                    }`}
                  />

                  <span
                    className={`block h-0.5 w-5 bg-current transition ${
                      isOpen ? 'opacity-0' : ''
                    }`}
                  />

                  <span
                    className={`block h-0.5 w-5 bg-current transition ${
                      isOpen ? '-translate-y-2 -rotate-45' : ''
                    }`}
                  />

                </div>
              </button>

            </div>
          </div>


          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4">

              <div className="flex flex-col gap-1 p-4 bg-[#fffdfb] border border-[#eee3dc] rounded-2xl shadow-lg">

                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-[#3d302b] rounded-xl hover:bg-[#f3eee9] hover:text-[#8b5e4b]"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="h-px bg-[#eee3dc] my-2" />

                <button
                  onClick={() => {
                    setIsOpen(false)
                    setIsLoginModalOpen(true)
                  }}
                  className="w-full rounded-xl bg-[#3d302b] px-4 py-3 text-sm font-medium text-white hover:bg-[#8b5e4b]"
                >
                  เข้าสู่ระบบ
                </button>

              </div>
            </div>
          )}

        </div>
      </nav>


      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}