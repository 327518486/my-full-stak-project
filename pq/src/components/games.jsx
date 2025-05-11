import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Addgame } from "./addGame"
import { UpdateGame } from "./updateGame"
import { Dell, GetAllGames } from "../axios/gameAxios"

export const Games=()=>{
   //משתנה שיכיל האם לפתוח אפשרות עידכון
    const [toup,settoup]=useState(false)
    const [upid,setupid]=useState(0);
    const [add,seta]=useState(false)
   //המשחקים
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


  
    const [up,setu]=useState(false)

    const f1=()=>{
        seta(true)
        setu(false)
    }
    const f2=()=>{
        setu(true)
        seta(false)
    }

    const f3=(id)=>{
        debugger
        settoup(true)
         setupid(id)
    }
    const ddd=async(id)=>{
        let t= (await Dell(id))
        if(t.data){
            alert("V")
        }
        else{
            alert("X")
        }
    
    }

const dell=(id)=>{
    // debugger
    ddd(id);
}

    return<div>

<table className="table">
            <thead>
                <tr key={100}>
                    <th>קוד מוצר </th>
                    <th>שם המשחק</th>
                    <th>מחיר</th>
                    <th>כמות במלאי</th>
                    <th>מספר קטגוריה</th>
                    <th>מספר תמונה</th>
                    <th>עידכון משחק</th>
                    <th>מחיקה משחק</th>
                </tr>
            </thead>
            {/* "gameId": 5,
                "gameName": "המבוך הקסום ",
                "gameCategory": 102,
                "gamePrice": 95,
                "gameImg": null,
                "gameAmount": 15,
                "gameCategoryNavigation": null,
                "saleDetails": [] */}
            <tbody>
            {/* style={{ backgroundColor: (x.done ==="true" ? "green" : "red") }} */}
                {list.map((x,i) => (<tr key={i}>
                    <td>{x.gameId}</td>
                    <td>{x.gameName}</td>
                    <td>{x.gamePrice}</td>
                    <td>{x.gameAmount}</td>
                    <td>{x.gameCategory}</td>
                    <td>{x.gameImg}</td>
                    {/* <td><Link to={`updateG/${x.gameId}`}>עידכון</Link></td> */}
                    <td><button  className="btn btn-outline-warning" onClick={()=>f3(x.gameId)}>עידכון</button></td>
                    <td><button  className="btn btn-outline-warning" onClick={()=>dell(x.gameId)}>מחיקה</button></td>
                   </tr>))}
            </tbody>
            
            {/* {x.done}? "true":"false" */}
        </table>

        {toup&&<UpdateGame id={upid}></UpdateGame>}
         {/* <Link className="btn btn-outline-warning" style={{ margin:'2px'}} to={`/game/addG`}>הוספת משחק</Link> */}
         {/* <Link  className="btn btn-outline-warning" style={{ margin:'2px'}} to="updateG">עידכון משחק</Link> */}
         
        <button className="btn btn-outline-warning" style={{display:"inline-block"}} onClick={()=>seta(true)}> 
        הוספת משחק
        </button>
        <h6></h6>
        {add&&<Addgame></Addgame>}
       {/* <Link className="btn btn-outline-warning" to="addG">הוספת משחק</Link> */}
    </div>
        
}