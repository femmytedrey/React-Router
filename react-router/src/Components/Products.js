import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
    <div>
        <input type='search' placeholder='Search products'/>
    </div>
    <nav className='nested-nav'>
        <Link to='featured'>Feature</Link>
        <Link to='new'>new</Link>
    </nav>
    <Outlet />
    </>
    
  )
}
