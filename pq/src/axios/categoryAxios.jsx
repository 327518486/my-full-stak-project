import axios from "axios"

const url="https://localhost:7227/api/Category/"

//add
export const AddCategory=(obj)=>{
 return axios.put(`${url}add`,obj)
}

//dell
export const DellCategory=(id)=>{
    return axios.delete(`${url}dell/${id}?categoryId=${id}`)
}
// 1108?categoryId=1108
//update
export const Updateategory=(id,obj)=>{
    debugger
//     obj={ "categoryId": 1113,
//   "categoryName": "ה"}
return axios.post(`${url}update/${id}`,obj)
}
// https://localhost:7227/api/Category/update/1112
//get all
export const Getcategory=()=>{
return axios.get(`${url}myGetCategory`)
}