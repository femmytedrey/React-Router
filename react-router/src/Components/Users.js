import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { User1 } from './User1'

export const Users = () => {
  return (
    <>
    <div>
        <Link>User 1</Link>
        <Link>User 2</Link>
        <Link to={ <User1 /> }>User 3</Link>
    </div>
    <Outlet />
    </>
    
  )
}
