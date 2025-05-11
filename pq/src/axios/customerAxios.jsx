import axios from "axios";
// import React from "react";
 
const url="https://localhost:7227/api/Customer/"

// שליפה של כל הלקוחות
export const CustGetAll=()=>{
   return axios.get(`${url}getAll`);
}
// הוספת לקוח
export const custAdd=(obj)=>{
    return axios.put(`${url}addCust`,obj);
}
//בדיקה אם קיים
export const Check=(name,pass)=>{
    return axios.get(`${url}isExsist`,name,pass);
}

//  שליפת לקוח לפי ID
export const getCust=()=>{
    return axios.put(`${url}isExsist`) 
}
// https://localhost:7227/api/Customer/isExsist?name=%D7%90%D7%AA%D7%99%20%D7%9E%D7%A0%D7%93%D7%9C%D7%91%D7%95%D7%99%D7%9D&custPassWord=327518486

//קבלת הID של הלקוח
export const getId=(pass)=>{
    return axios.get(`${url}custId?custPassWord=${pass}`)
}
// https://localhost:7227/api/Customer/custId?custPassWord=327518486