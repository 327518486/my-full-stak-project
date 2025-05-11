import { useContext, useEffect, useState } from "react"
// import MyContex from "../contex"
// import{custAdd} from "../axios/customerAxios"
import { Await } from "react-router-dom"
import {addCustomer, custAdd} from "../axios/customerAxios"

export const Rishum=()=>{
    // debugger
     //משתנה שיקלות את המשתמש
        const [name,setname]=useState({
    "custName": "פנחס לוין",
    "custPassWord": "987654321",
    "creditNum": "2154 1122 5858 9696",
    "cvc": "369",
    "volidThru": "02/29",
    })

//משתנה שמכיל האם לחץ לאישור
//נעשה בגלל שהביא שגיעה בהפעלת הפונקציה בעת לחיצה
const [click,setc]=useState(false)

const r=async(name)=>{
    debugger
    let y=(await custAdd(name));
    if(y.data){
        alert("נרשמת בהצלחה")
    }
    else{
        alert("נכשל")
    }
}
const t=(n)=>{
    debugger
 r(n)
}

    return<div className="container" style={{width:'90%' ,margin:'2px', textAlign:"center",paddingLeft:'35%',paddingTop:'5%'}} >
        
    <div className="card text-center mb-3 " style={{width:'50%' ,margin:'2px'}}>
    <input className="form-control" style={{width:'80%', margin:'5px'}} type="text" placeholder="שם" onBlur={(e)=>{setname({...name,custName:e.target.value})}}></input>
    <input className="form-control" style={{width:'80%', margin:'5px'}} type="text" placeholder="סיסמה" onBlur={(e)=>{setname({...name,custPassWord:e.target.value})}}></input>
    <input className="form-control" style={{width:'80%', margin:'5px'}} type="text" placeholder="מספר אשראי" onBlur={(e)=>{ e.target.value.length==19?setname({...name,creditNum:e.target.value}):alert("יש להכניס את מספר הכרטיס בצורה הבאה: 1111 1111 1111 1111בלי רווח בסוף")}}></input>
    <input className="form-control" style={{width:'80%', margin:'5px'}} type="text" placeholder="שלוש ספרות בגב הכרטיס " onBlur={(e)=>{setname({...name,cvc:e.target.value})}}></input>
    <input className="form-control" style={{width:'80%', margin:'5px'}} type="text" placeholder="תוקף הכרטיס" onBlur={(e)=>{setname({...name,creditNum:e.target.value})}}></input>
    <button className="btn btn-outline-warning" style={{width:'80%', margin:'5px'}} onClick={()=>r(name)}>אישור</button>
    </div>
</div>
}