import axios from "axios"
import { useEffect, useState } from "react"

export const Products=()=>{
    const [arr,setarr]=useState([])
debugger
    useEffect(()=>{
        axios.get("https://localhost:7227/api/Category/myGetCategory").then(x=>{setarr(x.data);debugger},[])
    })
    return<div className="card bg-info text-white">
        <h1>hhhhh</h1>
        {arr.map(x=><p>{x}</p>)}
    </div>
    

}

