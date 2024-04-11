import React, {useContext} from 'react'
import UserContext from '../../Context/Usercontext'

function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return<div className='mt-10 text-center text-sm font-bold text-md text-gray-800'>Please Login</div>
  return<div className='text-center text-sm font-bold leading-6 text-indigo-600 hover:text-indigo-500'>Welcome {user.username}</div>
}

export default Profile;