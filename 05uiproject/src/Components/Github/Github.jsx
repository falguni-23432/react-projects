import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]= useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/falguni-23432")
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    
    <div className='text-center  bg-gray-500 text-black font-serif  font-medium p-4 text-3xl'>
        <h1 className='p-2'> Owner Name: {data.login}</h1>
        <h1 className='text-center text-black font-serif  font-medium p-2 text-3xl'>Github Followers:{data.followers}</h1>
        <img className=' mb-3 ' src={data.avatar_url} alt="profile" />
    </div>
  )
}

export default Github

