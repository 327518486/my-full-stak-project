import { useState } from "react"
import { AddCategory } from "../axios/categoryAxios"

export const Addcategory=()=>{

    const add=async()=>{
        let v=await (await AddCategory(c)).data
        if(v){
            alert("נוסף בהצלחה")
        }
        else{
            alert("נכשל")

        }
    }

    const ok=()=>{
        debugger
        add()
    }

    const [c,setc]=useState({categoryName:''})
    return<div className="card text-center mb-3">
    <input className="form-control" type="text" placeholder="categoryName" onBlur={(e)=>setc({...c,categoryName:e.target.value})} />
    <button className="btn btn-outline-warning" onClick={()=>ok()}>הוסף</button>
    </div>
}