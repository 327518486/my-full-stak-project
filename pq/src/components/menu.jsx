import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MyContex from "../contex"

export const Menu=()=>{
    // debugger
let text=useContext(MyContex).isc
let manager=useContext(MyContex).ism

const [t,sett]=useState(false)
    return<>
    <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="home">דף הבית</Link>
                        
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="login">התחברות</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="rishum">רישום</Link>
                        
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="sal">סל קניות</Link>
                    </li>

                    {/* <li className="nav-item">
                       
                        <Link className="btn btn-outline-warning" to="addG">הוספת משחק</Link>
                    </li> */}

                    {/* אם אתה מנהל אז תציג */}
                    {manager&&<>
                        <li className="nav-item">
                        <Link className="nav-link" to="category">קטגוריות</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="game">משחקים</Link>
                    </li>
                    </>}
                    
                         {/* <li className="nav-item">
                        <Link className="nav-link" to="person">אזור אישי</Link>
                    </li>  */}
                  
                </ul>

            </div>
           <p>{text}</p>
        </nav>
    </>
}