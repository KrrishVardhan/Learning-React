import React, {useContext} from 'react'
// here we use the useContext hook after all the setup
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div className="profile-container">Please Login</div>
  return (
    <div className="profile-container">
      Welcome {user.username}
    </div>
  )
}

export default Profile