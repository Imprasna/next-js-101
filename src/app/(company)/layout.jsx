import React from 'react';
import './layout.css';
import Link from 'next/link';

const Layout = ({children}) => {
  return (
    <div className="layout_border">
      <div className="left">
        <ul>
          <p style={{fontWeight: 600, textTransform: "uppercase", borderBottom: '1px solid red'}}><Link href="/about">About</Link></p>
          <p style={{fontWeight: 600, textTransform: "uppercase", borderBottom: '1px solid red'}}><Link href="/about/owner">Owner</Link></p>
          <p style={{fontWeight: 600, textTransform: "uppercase", borderBottom: '1px solid red'}}><Link href="/team">Team</Link></p>
          <p style={{fontWeight: 600, textTransform: "uppercase", borderBottom: '1px solid red'}}><Link href="/contact">Contact</Link></p>
        </ul>
      </div>
      <div className="right">
          {children}
      </div>
    </div>
  )
}

export default Layout