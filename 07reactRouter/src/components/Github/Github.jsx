import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sudhakarsurvase')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     } )
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers : {data.following}
      <img src={data.avatar_url} alt=" Git Picture" width={250} height={100}/>
    </div>
  )
}
export default Github

export const githubInfoLoader = async ()=> {
    const response = await fetch ('https://api.github.com/users/sudhakarsurvase')
    return response.json()
}
