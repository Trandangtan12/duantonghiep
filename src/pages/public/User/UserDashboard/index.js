import React from 'react'
import { UserApi } from '../../../../service/userService'

const UserDashBoard = () => {
    const {user} = UserApi.isAuthenticated()
    console.log(user);
    return (
        <div className="tw-w-3/4 tw-mx-auto">
            hello!!!
            {user.email}
        </div>
    )
}

export default UserDashBoard
