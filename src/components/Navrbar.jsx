import Link from 'next/link'
import React from 'react';
import "./navbar.css"

const Navrbar = () => {
  return (
      <div className="header">
          <div className="likss">
              <p><Link href="/">Home</Link></p>
              <p><Link href="/about">About</Link></p>
              <p><Link href="/about/owner">Owner</Link></p>
              <p><Link href="/team">Team</Link></p>
              <p><Link href="/contact">Contact</Link></p>
              <p><Link href="/blog">Blog</Link></p>
              <p><Link href="/setting">Settings</Link></p>
          </div>
    </div>
  )
}

export default Navrbar