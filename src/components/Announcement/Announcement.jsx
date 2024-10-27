import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Announcement() {
    //const data=useLoaderData()
    const [data,setdata]=useState([])

  return (
    <div className='text-centre m-4 bg-gray-600 text-white p-4 text-3xl'>Exam Updates
    </div>
  )
}

