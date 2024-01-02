import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
  const NavLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',

    }
  }
  const auth = useAuth();
  return (
    <nav className='primary-nav'>
        <NavLink style={NavLinkStyle} to = '/'>Home</NavLink>
        <NavLink style={NavLinkStyle} to = '/products'>Products</NavLink>
        <NavLink style={NavLinkStyle} to = 'about'>About</NavLink>
        <NavLink style={NavLinkStyle} to = 'profile'>Profile</NavLink>
        {
          !auth.user && (
            <NavLink style={NavLinkStyle} to = 'login'>Login</NavLink>
          )
        }
    </nav>
  )
}
