'use client'
import React,{useState} from 'react'
import Link from 'next/link'
//import { X25519KeyPairKeyObjectOptions } from 'crypto'
import { X,Menu } from 'lucide-react'

const Practive = () => {
    const[isOpen,setIsOpen]=useState(false)
  return (
    <div>
      
      <div>
        <h2>home</h2>
        <h2>home</h2>
        <h2>home</h2>
        <h2>home</h2>
      </div >
      
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none"> {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg">
          <Link href="/" className="block hover:text-gray-100">Home</Link>
          <Link href="/product" className="block hover:text-gray-100">Products</Link>
          <Link href="/checkout" className="block hover:text-gray-100">Checkout</Link>
        </div>
      )}
    </div>
  )
}

export default Practive
