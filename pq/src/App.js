// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Menu } from './components/menu';
// import { Products } from './components/products';
import { MyRouting } from './components/myrouting';
import { Myprovider } from './contex';
import {  useState } from "react"

function App() {
  // משתמש
  // const [product,setProduct]=useState({})
  const [arrProd,setArrProd]=useState([])
  //manager
  const [isManager,setIsManager]=useState(false)
  const [curentUser,setCurentUser]=useState("לא מחובר")
  //כל הפרטים של המחובר
  const [conect,setConect]=useState({name:'on',pass:'000'})
  const [pass,setpass]=useState(0)
//סה"כ מחיר הקניה
const [pay,setpay]=useState(0)

const common={
  ism:isManager,
  setism:setIsManager,
  isc:curentUser,
  setisc:setCurentUser,
  pass:pass,
  setpass:setpass,
  isconect:conect,//מי מחובר
  setc:setConect,//שינוי מי מחובר
  arrp:arrProd,//מערך הסל
  sarrp:setArrProd,//שינוי הסל
  pay:pay,//מחיר הקניה
  setpay:setpay//שינוי המחיר
}

  return (
    <div className="App">
      <Myprovider value={common}>

      <BrowserRouter>
      
      <Menu></Menu>
      <MyRouting></MyRouting>

      </BrowserRouter>
    
      </Myprovider>
    </div>
  );
}

export default App;
