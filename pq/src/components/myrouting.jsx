import { Route, Routes } from "react-router-dom"
import { Login } from "./login"
import { Home } from "./home"
import { Categories } from "./categories"
import { Addcategory } from "./addCategory"
import { UpdateCategory } from "./updateCategory"
import { Games } from "./games"
import { Addgame } from "./addGame"
import { UpdateGame } from "./updateGame"
import { Rishum } from "./rishum"
import { Sal } from "./sal"
import { Moredetailes } from "./moreDitails"
import { PersomalAera } from "./persomalAera"

export const MyRouting=()=>{
    return<>
       <Routes>
       <Route path="/"  element={<Home></Home>}></Route>

            <Route path="home" element={<Home></Home>}>
                     <Route path="more/:x" element={<Moredetailes></Moredetailes>}></Route>
            </Route>

            

            <Route path="person" element={<PersomalAera></PersomalAera>}></Route>
            {/* PersomalAera */}
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="rishum" element={<Rishum></Rishum>}></Route>
            <Route path="sal" element={<Sal></Sal>}></Route>   
            

            <Route path="category" element={<Categories></Categories>}>
                    <Route path="addC" element={<Addcategory></Addcategory>}></Route>
                    <Route path="update/:id" element={<UpdateCategory></UpdateCategory>}></Route>
            </Route>

            <Route path="game" element={<Games></Games>}>
                  <Route path="addG" element={<Addgame></Addgame>}></Route>
                  <Route path="updateG/:id" element={<UpdateGame></UpdateGame>}></Route>
            </Route>
            {/* <Route path="addG" element={<Addgame></Addgame>}></Route> */}
        </Routes> 
    </>
}