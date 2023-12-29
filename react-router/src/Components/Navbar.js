import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const NavLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'regular',

    }
  }
  return (
    <nav className='primary-nav'>
        <NavLink style={NavLinkStyle} to = '/'>Home</NavLink>
        <NavLink style={NavLinkStyle} to = 'about'>About</NavLink>
        <NavLink style={NavLinkStyle} to = '/products'>Products</NavLink>
    </nav>
  )
}
