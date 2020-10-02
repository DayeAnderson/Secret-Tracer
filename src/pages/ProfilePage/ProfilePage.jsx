import React from 'react'
import './ProfilePage.css'

function ProfilePage({user, place}) {
    return (
        <>
        <img className="prof" id="prof"src="images/ccc.png" height="300px" />
        <h2 className="prof">Profile Pic</h2>
        <h2 className="prof">{user.rankings}</h2>
        <h2 className="prof">{user.name}</h2>
        <h3>Recent Reviews:</h3>
        </>
    )
}

export default ProfilePage;