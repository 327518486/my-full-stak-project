import axios from "axios"

const url="https://localhost:7227/api/Buy/"

export const Addbuy1=(obj)=>{
    // obj={
    //     "buyId": 0,
    //     "custId": 6,
    //     "buyDaty": "2025-01-14T17:40:26.736Z",
    //     "buySum": 100
    //   }
return axios.put(`https://localhost:7227/api/Buy/addBuy`,obj)
}