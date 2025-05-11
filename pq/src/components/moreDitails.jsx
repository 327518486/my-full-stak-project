import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { GetAllGames, GetGameById } from "../axios/gameAxios"

export const Moredetailes=()=>{
    const [aa,setaa]=useState({})
debugger
    let p=useParams()

    // const f1=async()=>{
    //     if(aa==null){
    //     let y=(await GetGameById(p.x)).data
    //     setaa(y)
    // console.log(y)}
    // }

    // useEffect(()=>{f1()},[])
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

    // let game=list.find((g=>g.gameId==p.x))
    
    return<>
      <div className="card text-center mb-3" style={{width:'18rem',display:"inline-block", margin:'10px'}}>
         {list.map((r,i)=>(`${r.gameId}`==parseInt(p.x)?<div key={i}>
         <img src={`https://localhost:7227/${r.gameImg}`} style={{width:'60%'}}></img>
        <h5>קוד: {r.gameId}</h5>
         <h5>קטגוריה: {r.gameName}</h5>
         <h5>מחיר: {r.gamePrice}ש"ח</h5>
         <h5> כמות במלאי: {r.gameAmount}</h5>
         <h5>מספר קטגוריה: {r.gameCategory}</h5>

        </div>:<></>  ))} 
      </div>
    </>
}