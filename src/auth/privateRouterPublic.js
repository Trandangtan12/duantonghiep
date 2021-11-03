import React from 'react'
import { Redirect, Route } from 'react-router'
import { UserApi } from '../service/userService'

const PrivateRouterPublic = ({children}) => {
    return (
       <Route render={() => {
           return UserApi.isAuthenticated() ? children : <Redirect to={{pathname: "/signin"}} />
       }}/>
    )
}

export default PrivateRouterPublic
