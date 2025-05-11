import { useEffect, useState } from "react";
import { AddGame, GetAllGames } from "../axios/gameAxios";

export const Addgame=()=>{
//         const [list,setlist]=useState([]);
//         //מילוי המערך
//         const allgame=async()=>{
//             if(list.length===0){
//                 let y=(await GetAllGames()).data;
//                 setlist(y)
//             }
//         }
// //הפעלת הפונקציה
// useEffect(()=>{Addgame()},[])
// return<>
// <h1>it work</h1>

// </>

//משתנה שיכיל את המשחק החדש
 const [item,setitem]=useState({})
 //פונקציה המוסיפה משחק
const add=async(obj)=>{
    debugger
     let v=(await AddGame(obj))
     if(v.data)
     {
        alert("נוסף בהצלחה")
     }
     else{
        alert("נכשל")
     }
}
const f1=()=>{
    debugger
    add(item)
}


    return<div className="card text-center mb-3" style={{width:'18rem',display:"inline-block", margin:'10px'}} >
            <input className="form-control" type="text" placeholder="שם המשחק" onBlur={(e)=>setitem({...item,gameName:e.target.value})}/>
            <input className="form-control" type={'number'}  placeholder="קוד קטגוריה" onBlur={(e)=>setitem({...item,gameCategory:e.target.value})} />
            <input className="form-control"type={'number'}  placeholder="מחיר" onBlur={(e)=>setitem({...item,gamePrice:e.target.value})} />          
            <select className="form-control" onBlur={(e)=>setitem({...item,gameImg:e.target.value})} >תמונה
                <option value="pic1.jpg">pic1.jpg</option>
                <option value="pic2.jpg">pic2.jpg</option>
                <option value="pic3.jpg">pic3.jpg</option>
                <option value="pic4.png">pic4.png</option>
                <option value="pic5.jpg">pic5.jpg</option>
            </select>
            <input className="form-control" type={'number'}  placeholder="כמות במלאי" onBlur={(e)=>setitem({...item,gameAmount:parseInt(e.target.value)})}/>
            <button className="btn btn-outline-warning" style={{ margin:'2px'}} onClick={()=>f1()}>הוסף </button>
       

        </div>
}