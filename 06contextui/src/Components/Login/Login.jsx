import React, {useState, useContext} from 'react'
import UserContext from '../../Context/Usercontext'


function Login() {

    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
       e.preventDefault()
       setUser({username, password})
    }
  return (
    <div className='flex min-h-full mt-5 flex-1 flex-col justify-center px-6 py-8 rounded-lg lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm bg-slate-100'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
        className='block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
          <br/>
        <input type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        className='block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
         />
        <button onClick={handleSubmit}
        className='flex w-full mt-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Submit</button>
    </div>
  )
}

export default Login;