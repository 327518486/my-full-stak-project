import { useContext } from "react"
import MyContex from "../contex"
import { useLocation, useNavigate } from "react-router-dom"
import { Addbuy, Addbuy1 } from "../axios/buyAxios"
import { Additem } from "../axios/saleDetails"
import { getId } from "../axios/customerAxios"

export const Sal=()=>{
    // let mysal=useContext(MyContex).arrp

    const sal=useContext(MyContex).arrp
    const setsal=useContext(MyContex).sarrp

    //מי מחובר?
    const conect=useContext(MyContex).conect
    const co=useContext(MyContex).isc
    const pw=useContext(MyContex).pass

    //ריענון הדף הנוכחי
    const location = useLocation();
    const mynavigate=useNavigate();

    //מחיר
    let sum=useContext(MyContex).pay
    let setsum=useContext(MyContex).setpay

//+
    const add=(v)=>{
        debugger
        let y=sal.find(x=>x.gameCode===v.gameCode)
        y.quantity=y.quantity+1
        y.finalPrice=y.finalPrice+v.price
        setsum(sum+v.price)
        const previousPath = location.pathname; // אחסון נתיב נוכחי
        mynavigate('/');
    }
//-
    const sub=(v)=>{
        // debugger
        let y=sal.find(x=>x.gameCode==v.gameCode)
        if(y.quantity>1){
            y.quantity=y.quantity-1
            y.finalPrice=y.finalPrice-v.price
        }
       else{
       const newC=sal.filter(x=>x.gameCode!=v.gameCode)
        setsal(newC)
       }
       setsum(sum-v.price)
        mynavigate('/sal');
    }
 let iid=0;
    //פונקציה השולפת את הID של הלקוח
    const ccc=async()=>{
        debugger
        let id=await (await getId(pw)).data
            iid=id
    }

    //משתנה שיכיל קניה 
    const buy=({
        
            "buyId": 0,
            "custId": 6,
            "buyDaty": "2025-01-14T17:40:26.736Z",
            "buySum": 1001
    })
//משתנה שיכיל את קוד הקניה
let kode;
    //פונקציה המוסיפה קניה 
    const f1=async()=>{
        debugger
        let id=await (await getId(pw)).data
        buy.buySum=parseInt(sum)
        buy.custId=parseInt(id)
        let y = await Addbuy1(buy);
        if(y.data>100){
        // יש לשמור את קוד הקניה
        console.log(y,y.data)
        sda(y.data);
       
        }
    }
   

    //משתנה של פרטי קניה
    const sd=({
       
         buyId :0,
         gameId :0,
         saleAmount:0})

         //מערך של המוצרים שלא נוספו לקניה אך ישלם עליהם....
        const [aaa,setaaa]=([])

    //פונקציה שעוברת על מערך המוצרים ומכניסה אותם לפרטי קניה
     const sda=async(code)=>{
        debugger
        for(let i=0;i<sal.length;i++){
            sd.BuyId=code
            sd.GameId=sal[i].gameCode
            sd.SaleAmount=sal[i].quantity
            let c= await Additem(sd);
            if(!c){
                setaaa({...aaa,sd})
            }
            if(c.data){
                    alert("הקניה בוצעה בהצלחה")
            }
        }
            
     }

    //הוספת קניה
    const endSale=()=>{
        debugger
       if(co==="לא מחובר"){
        alert("אינך מחובר אתה מועבר להתחברות")
        mynavigate('/login')
       }
       else{
       //let v= ccc();
       let w = f1();
    //    let y= sda(w.data);
    }
}

    return <> <div className="container mt-6">
        <table className="table" style={{ marginTop: '50px', textAlign: 'center' }}>
        <thead>
            <tr>
                <th scope="col">קוד משחק</th>
                <th scope="col">שם משחק</th>
                <th scope="col">מחיר</th>
                <th scope="col">כמות</th>
                <th scope="col">סה"כ</th>
                <th scope="col">+</th>
                <th scope="col">-</th>

            </tr>
        </thead>
        <tbody>
            {sal.map((x, i) => (
                <tr key={i}>
                    <td>{x.gameCode}</td>
                    <td>{x.gameName}</td>
                    <td>{x.price}₪</td>
                    <td>{x.quantity}</td>
                    <td>{x.finalPrice}</td>
                    <td><button  className="btn btn-outline-warning" onClick={()=>add(x)}>+</button></td>
                    <td><button  className="btn btn-outline-warning" onClick={()=>sub(x)}>-</button></td>
                </tr>
            ))}

        </tbody>
    </table>
    <h3>{sum}</h3>
    
    <button  className="btn btn-outline-warning" onClick={()=>endSale()}>סיום קניה</button>
    </div>
        {/* <Link className="btn btn-outline-dark" to={`/games/addGame`}>הוספת משחק</Link>
        <Outlet></Outlet> */}
    </>

   
}
