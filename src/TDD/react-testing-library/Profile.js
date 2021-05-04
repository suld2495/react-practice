import React from 'react'

const Profile = ({ username, name }) => {
    return (
        <div>
            <p>{username}</p>
            <p>{name}</p>
        </div>
    )
}

export default Profile
