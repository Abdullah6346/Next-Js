import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="bg-blue-400 flex items-center justify-evenly h-12">
      <Link href="Home" className="text-white">Home</Link>
      <Link href="About" className="text-white">About</Link>
      <Link href="Contact" className="text-white">Contact</Link>
      <Link href="Email" className="text-white">Email</Link>
    </nav>
  </div>
  
  )
}

export default Navbar
