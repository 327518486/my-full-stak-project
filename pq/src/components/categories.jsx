import { Link, Outlet, useNavigate } from "react-router-dom"
import { DellCategory, Getcategory, GetCategory, UpdateCategory } from "../axios/categoryAxios"
import { useEffect, useState } from "react"
import { Addcategory } from "./addCategory";

export const Categories=()=>{

    let n=useNavigate()
     //המשחקים
        const [list,setlist]=useState([]);
        //פונקציה עוטפת אסינכרונית
         const allc=async()=>{
            if(list.length==0){
                let y=(await Getcategory()).data;
                setlist(y)
            }
         }
        //הפונקציה עצמה
            useEffect(()=>{allc()},[])

        const f1=(id)=>{
            // debugger
            dell(id);
        }
        const [upid,setupid]=useState(0);
        const f2=(id)=>{
            // debugger
            setupid(id);
            setup(true);
            
        }

        const dell=async(id)=>{
            // debugger
            let u=(await DellCategory(parseInt(id)))
            if(u.data){
                alert("נמחק")
            }
            else{
                alert("נכשל")
            }
        }

        const [add,setadd]=useState(false)
        const[up,setup]=useState(true)

    return<div>
<table className="table">
            <thead>
                <tr key={100}>
                    <th>קוד קטגוריה </th>
                    <th>שם קטגוריה</th>
                    <th>עידכון קטגוריה </th>
                    <th>מחיקת קטגוריה</th>
                </tr>
            </thead>
            <tbody>
           
                    {/* "categoryId": 0,
                            "categoryName": "string" */}
                    {list.map((x,i)=>(<tr key={i}>
                        <td>{x.categoryId}</td>
                        <td>{x.categoryName}</td>
                        <td><Link className="nav-link active"  to={`update/${x.categoryId}`}>עידכון</Link></td>
                        {/* <td ><button className="btn btn-outline-warning" onClick={()=>f2(x.categoryIdyhg)}>עידכון</button></td> */}
                        <td><button className="btn btn-outline-warning" onClick={()=>f1(x.categoryId)}>מחיקה</button></td>
                    </tr>))}
                        
            </tbody>

            {/* <Link className="nav-link active"  to={`update/${x.categoryId}`}>עידכון</Link> */}
        {/* <Link  className="btn btn-outline-warning" style={{ margin:'2px'}} to={`addC`}>הוספת קטגוריה</Link> */}
        {/* <Link  className="btn btn-outline-warning" style={{ margin:'2px'}} to="updateC">עידכון קטגוריה</Link> */}
       </table>
       <button className="btn btn-outline-warning" onClick={()=>setadd(true)}>הוספת קטגוריה</button>
       {add&&<Addcategory ></Addcategory>}
       {up&&<Outlet></Outlet>}
    </div>

}