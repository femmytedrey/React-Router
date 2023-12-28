import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const NavLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'regular',
      color: isActive ? 'rgb(135, 255, 255)' : 'white'

    }
  }
  return (
    <nav>
        <NavLink style={NavLinkStyle} to = '/'>Home</NavLink>
        <NavLink style={NavLinkStyle} to = 'about'>About</NavLink>
    </nav>
  )
}
