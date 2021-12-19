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
            const userRole = user.roles.every(item => item.id === 1 || item.id === 2)
            return userRole
          }
        }
      }
      const isStaffTicket = user && user?.id === 3
    return (
        <Route render={()=>{
            return user && userKey() === true || isStaffTicket ? children : <Redirect to={{pathname: '/'}} />
        }}/>
    )
}

export default PrivateRouterAdmin
