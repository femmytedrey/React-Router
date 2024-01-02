import React from 'react'
import { Outlet, Link, SetURLSearchParams, useSearchParams } from 'react-router-dom'


export const Users = () => {
    const [ seachParams, setSearchParams] = useSearchParams();
    const showActiveUsers = seachParams.get('filter') === 'active'
  return (
    <>
    <div>
        <Link to='1'>User 1</Link>
        <Link to='2'>User 2</Link>
        <Link to='3'>User 3</Link>
    </div>
    <Outlet />
    <div>
      <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
      <button onClick={() => setSearchParams({})}>Reset Users</button>
    </div>
    {
      showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
    }

    </>
    
  )
}
