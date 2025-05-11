import React from "react";
import { useState} from "react";
import { GetAllGames, Update } from "../axios/gameAxios";
import { useParams } from "react-router-dom";
export const UpdateGame=(props)=>{
    //משתנה שיכיל את המוצר המעודכן
    const [item,setitem]=useState({})
    
    let p=useParams()
    // let p=useParams();
      const [list,setlist]=useState([]);
            //מילוי המערך
            const allgame=async()=>{
                if(list.length===0){
                    let y=(await GetAllGames()).data;
                    setlist(y)
                }
            }

    //פונקצית העידכון
    const updategame=(i)=>{
        debugger
        gameup(props.id,i)
    }


    const gameup=async(iid,item)=>{
        debugger
        let v=await Update(iid,item)
        if(v.data){
            alert("העידכון בוצע בהצלחה!")
        }
        else{
            alert("לא בוצע העידכון נסו שוב")
        }
    }

    return<>
    <h1>עידכון מוצר</h1>
    {/* "gameId": 5,
  "gameName": "המבוך הקסום",
  "gameCategory": 102,
  "gameCategoryName": "",
  "gamePrice": 100,
  "gameImg": "pic5.jpg",
  "gameAmount": 25 */}
        <div>
            <input className="form-control" type="text" placeholder="קוד"  onBlur={(e)=>setitem({...item,gameId:e.target.value})}/>
            <input className="form-control" type="text" placeholder="שם המשחק" onBlur={(e)=>setitem({...item,gameName:e.target.value})}/>
            <input className="form-control" type="text" placeholder="קוד קטגוריה" onBlur={(e)=>setitem({...item,gameCategory:e.target.value})} />
            <input className="form-control" type="text" placeholder="מחיר" onBlur={(e)=>setitem({...item,gamePrice:e.target.value})} />          
            <select className="form-control" onBlur={(e)=>setitem({...item,gameImg:e.target.value})} >תמונה
                <option value="pic1.jpg">pic1.jpg</option>
                <option value="pic2.jpg">pic2.jpg</option>
                <option value="pic3.jpg">pic3.jpg</option>
                <option value="pic4.png">pic4.png</option>
                <option value="pic5.jpg">pic5.jpg</option>
            </select>
            <input className="form-control" type="text" placeholder="כמות במלאי" onBlur={(e)=>setitem({...item,gameAmount:parseInt(e.target.value)})}/>
<button className="btn btn-outline-warning" onClick={()=>updategame(item)}> אישור</button>
        </div>
    </>
}