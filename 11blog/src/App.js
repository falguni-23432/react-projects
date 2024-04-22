import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import {authLogin,logout} from './Store/AuthSlice'
import authService from './Appwrite/Auth';
import { Footer, Header } from './Components/Index';
import { Outlet } from 'react-router-dom';

function App() {
  
const [loading , setLoading]= useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  // AuthService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(authLogin({userData}))
    }else{
      dispatch(logout())
    }
  })
  .finally(()=> setLoading(false))
},[dispatch])

  return !loading ?(
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
         <div className='w-full block '>
         <Header/>
         <main>
          Todo:<Outlet/>
          </main>
         <Footer/>
         </div>
      </div>
  ) : null
}

export default App;
