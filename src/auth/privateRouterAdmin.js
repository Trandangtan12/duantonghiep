import React, { Children } from 'react'
import { Redirect, Route } from 'react-router'
import { UserApi } from '../service/userService'

const PrivateRouterAdmin = ({children}) => {
    return (
        <Route render={()=>{
            return UserApi.isAuthenticated() && UserApi.isAuthenticated().user.role == 1 ? children : <Redirect to={{pathname: '/signin'}} />
        }}/>
    )
}

export default PrivateRouterAdmin
