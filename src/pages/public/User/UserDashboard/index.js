import React from 'react'
import { UserApi } from '../../../../service/userService'

const UserDashBoard = () => {
    const {user} = UserApi.isAuthenticated()
    // const userRole = user.roles.every(item => item.id === 1)
    // console.log(userRole);
    return (
        <div className="tw-w-3/4 tw-mx-auto">
            hello!!!
            {user.email}
        </div>
    )
}

export default UserDashBoard
