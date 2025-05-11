// import axios from "axios"
// import { useEffect, useState } from "react"

import { useContext, useEffect, useState } from "react"
import { Await, Link, Outlet } from "react-router-dom";
import { GetAllGames } from "../axios/gameAxios";
import MyContex from "../contex";


export const Home=()=>{
    const [list,setlist]=useState([]);
//פונקציה עוטפת אסינכרונית
 const all=async()=>{
    if(list.length==0){
        let y=(await GetAllGames()).data;
        setlist(y)
    }
 }
//הפונקציה עצמה
    useEffect(()=>{all()},[])

///הצגת פרטים נוספים 
//משתנה שיכיל את מספר המוצר שלו יוספו פרטים
const [item,setitem]=useState(0);


///משתני הסל
// arrp:arrProd,//מערך הסל
// sarrp:setArrProd//שינוי הסל
let setSal=useContext(MyContex).sarrp
let sal=useContext(MyContex).arrp

//מחיר
let sum=useContext(MyContex).pay
let setsum=useContext(MyContex).setpay

//משתנה שיכיל את המוצר החדש
const addtosal=({
    "gameCode": 0,
    "gameName": "string",
    "price": 0,
    "quantity": 0,
    "finalPrice": 0})

    const addSal=(g)=>{
        console.log(sal)
        addtosal.gameCode=g.gameId
        addtosal.gameName=g.gameName
        addtosal.price=g.gamePrice
        addtosal.quantity=1
        addtosal.finalPrice=g.gamePrice
    
        setSal([...sal,addtosal])
        setsum(sum+g.gamePrice)
        console.log(sal)
    }

    return<div>
         <Outlet></Outlet>
         <div>
      {list.map((x,i) => (   
     (<div className="card text-center mb-3" style={{width:'18rem',display:"inline-block", margin:'10px'}} key={i}>
         <h5>קוד: {x.gameId}</h5>
         <h5>שם המשחק: {x.gameName}</h5>
         <h5>מחיר: {x.gamePrice}ש"ח</h5>
         <button className="btn btn-outline-warning" style={{ margin:'2px'}}>
           <Link className="nav-link" to={`more/${x.gameId}`}> פרטים נוספים</Link>
            </button>
         <button className="btn btn-outline-warning" style={{ margin:'2px'}}onClick={()=>addSal(x)}>הוסף לסל</button>
      
        
        </div>


        )))}
       
       </div>
  {/* {list.map((x,i) => (`${x.gameId}`==item? 
        (<div className="card text-center mb-3" style={{width:'18rem',display:"inline-block", margin:'10px'}} key={i}>
         <img src={`https://localhost:7227/${x.gameImg}`} style={{width:'60%'}}></img>
         <h5>קוד: {x.gameId}</h5>
         <h5>שם המשחק: {x.gameName}</h5>
         <h5>מחיר: {x.gamePrice}ש"ח</h5>
         <h5> כמות במלאי: {x.gameAmount}</h5>
         <h5>מספר קטגוריה: {x.gameCategory}</h5>
         <button className="btn btn-outline-warning" style={{ margin:'2px'}}onClick={()=>{setitem( `${x.gameId}`)}}>פרטים נוספים</button>
         <button className="btn btn-outline-warning" style={{ margin:'2px'}}onClick={()=>{alert('נוסף בהצלחה')}}>הוסף לסל</button>
        </div>):(<div className="card text-center mb-3" style={{width:'18rem',display:"inline-block", margin:'10px'}} key={i}>
         <h5>קוד: {x.gameId}</h5>
         <h5>שם המשחק: {x.gameName}</h5>
         <h5>מחיר: {x.gamePrice}ש"ח</h5>
         <button className="btn btn-outline-warning" style={{ margin:'2px'}}onClick={()=>{setitem( `${x.gameId}`)}}>פרטים נוספים</button>
         <button className="btn btn-outline-warning" style={{ margin:'2px'}}onClick={()=>{alert('נוסף בהלחה')}}>הוסף לסל</button>
        </div>


        )))} */}

    </div>
}