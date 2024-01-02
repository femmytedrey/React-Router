import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const NavLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',

    }
  }
  return (
    <nav className='primary-nav'>
        <NavLink style={NavLinkStyle} to = '/'>Home</NavLink>
        <NavLink style={NavLinkStyle} to = '/products'>Products</NavLink>
        <NavLink style={NavLinkStyle} to = 'about'>About</NavLink>
        <NavLink style={NavLinkStyle} to = 'profile'>Profile</NavLink>
    </nav>
  )
}
