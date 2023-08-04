import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-12 flex justify-between items-center text-red-900 md:h-20 lg-px-20 xl:px-40 border-t-2 border-t-red-900'>
     <Link href="/" className="font-bold text-xl">MASSIMO</Link>
     <p>© ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer