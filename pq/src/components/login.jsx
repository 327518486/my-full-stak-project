import { useContext, useEffect, useState } from "react"
import MyContex from "../contex"
import { useNavigate } from "react-router-dom"// Await,
// import {Check} from "../axios/customerAxios"
import { CustGetAll} from "../axios/customerAxios";//Check, getCust


export const Login=()=>{
    //ניתוב ל...
    let n=useNavigate();
    //משתנה שיקלות את המשתמש
    const [name,setname]=useState({})
    //בפונקציות
   let manager=useContext(MyContex).setism
   let user=useContext(MyContex).setisc
   let conect=useContext(MyContex).setc//מי מחובר
   let passw=useContext(MyContex).setpass//מי מחובר

    //לא הצלחתי לשלוף לפי שם וקוד לכן
    //שליפת כל המשתמשים
    const [x,setx]=useState([])
const f1=async()=>{
    if(x.length===0){
       let v=(await CustGetAll()).data;
        setx(v)
    }
  
  }
useEffect(()=>{f1()},[])


// const [cu,setcu]=useState({name:"",pass:""})
    const conection=async()=>{
        passw(name.pass)
        // debugger
        if(name){
            if(name.name==="manager"&& name.pass==="111"){
                manager(true)
                user("מחובר "+name.name)
                conect(name)
            }
            else{
                if(x.find(y=>y.custName===name.name&& y.custPassWord===name.pass)){
                    manager(false)
                user("מחובר "+name.name)
                conect(name)
                n("/home")
                }
                else{
                    n("/rishum")
                }
            }
        }
        }



    return<div className="container" style={{width:'90%' ,margin:'2px', textAlign:"center",paddingLeft:'35%',paddingTop:'5%'}} >
        
        <div className="card text-center mb-3 " style={{width:'50%' ,margin:'2px'}}>
        <input className="form-control" style={{width:'80%', margin:'5px'}} type="text" placeholder="שם" onBlur={(e)=>{setname({...name,name:e.target.value})}}></input>
        <input className="form-control" style={{width:'80%', margin:'5px'}} type="text" placeholder="סיסמה" onBlur={(e)=>{setname({...name,pass:e.target.value}) }}></input>
        <button className="btn btn-outline-warning" style={{width:'80%', margin:'5px'}} onClick={()=>conection()}>אישור</button>
        </div>
   </div>
} 