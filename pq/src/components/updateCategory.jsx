import { useState } from "react"
import { useParams } from "react-router-dom"
import { Updateategory } from "../axios/categoryAxios"

export const UpdateCategory=()=>{
    let p=useParams({})
    console.log(p.id)
    debugger
    const [nc,setnc]=useState({ "categoryId": 1113,
      "categoryName": "ה"});
    // let pas=props.id
    const myupdate=()=>{
      setnc({...nc,categoryId:p.id})
      up();
    }
    const up=async()=>{
      let v = await Updateategory(p.id,nc)
      debugger
      // Updateategory(p.id,nc)
      if (v.data){
        alert("good")
      }
      else{
        alert("ho no")
      }
      
    }
    return<div>
      <input placeholder="category name" onBlur={(e)=>setnc({...nc,categoryName:e.target.value})}></input>
      <button  className="btn btn-outline-warning" onClick={()=>myupdate()}>ok</button>
    </div>
    
}