import React from 'react'
import { Outlet, Link } from 'react-router-dom'


export const Users = () => {
  return (
    <>
    <div>
        <Link to='1'>User 1</Link>
        <Link to='2'>User 2</Link>
        <Link to='3'>User 3</Link>
    </div>
    <Outlet />
    </>
    
  )
}
