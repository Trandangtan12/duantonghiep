import React from 'react'
import { Redirect, Route } from 'react-router'
import { UserApi } from '../service/userService'

const PrivateRouterAdmin = ({children}) => {
    const {user} = UserApi.isAuthenticated()
    const userKey = () => {
        if(user === undefined) {
          return undefined
        } else {
          if(user.hasOwnProperty('roles') === false) {
            return undefined
          } else {
            const userRole = user.roles.every(item => item.id === 1 || item.id === 2 ) 
            return userRole
          }
        }
      }
    return (
        <Route render={()=>{
            return user && userKey() === true || user.id === 3 ? children : <Redirect to={{pathname: '/signin'}} />
        }}/>
    )
}

export default PrivateRouterAdmin
