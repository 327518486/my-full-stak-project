import axios from "axios"

const url="https://localhost:7227/api/Game/"

// return axios.שיטת הגישה(ניתוב לפונקציה)
 

//שליפת כל המשחקים
export const GetAllGames=()=>{
    return axios.get(`${url}GetAllList`)
}
 
//שליפה לפי ID
export const GetGameById=(id)=>{
    return axios.get(`${url}gameById?id=${id}`)
}

//הוספה
debugger
export const AddGame=(obj)=>{
    return axios.put(`${url}addGame`,obj)
}
// https://localhost:7227/api/Game/addGame
//עידכון
export const Update=(id,obj)=>{
    debugger
    return axios.post(`${url}updateGame?gameId=${id}`,obj)
}
//מחיקה
export const Dell=(id)=>{
    return axios.delete(`${url}dell?id=${id}`)
}
// https://localhost:7227/api/Game/dell?id=7