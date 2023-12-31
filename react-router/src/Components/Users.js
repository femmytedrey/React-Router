import React from 'react'
import { Outlet, Link, SetURLSearchParams } from 'react-router-dom'


export const Users = () => {
    const [ seachParams, setSearchParams] = useState()
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
