import { Navigate } from 'react-router-dom'
import React from 'react'
import { useAuth } from './auth'

export const RequireAuth = ({children}) => {
    const Auth = useAuth()
    if(!Auth.user){
        return <Navigate to = '/login' />
    }
  return children
}
