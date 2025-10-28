import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    return (
        <div className='bg-gray-700 text-white p-3'>
            <h1>Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="" width={300}/>
        </div>
    )
}

export default Github
export const gitHubLoader = async () => {
    const res = await fetch("https://api.github.com/users/KrrishVardhan")
    return res.json()
}