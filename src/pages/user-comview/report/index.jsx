import React, { useEffect, useState } from 'react'
import ReportsTable from './ReportsTable'
import axios from 'axios'

const UserReport = () => {
const [data,setData]=useState()
useEffect(()=>{
axios.get("https://conview-backend.onrender.com/api/report/getAll")
.then((res)=>{
  console.log(10,res.data.data)
  setData(res.data.data)
})
.catch((err)=>{
  console.log(err)
})
},[])

  return (
    <>
        <ReportsTable  data={data}/>
    </>
  )
}

export default UserReport
