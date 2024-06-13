'use client'
import React, {useEffect} from 'react'

export default function Template({ children }) {
    useEffect(() => { 
        console.log("Page came in  view");
    }, []);
    return <div>{children}</div>
  }