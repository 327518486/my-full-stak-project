import axios from "axios"

const url="https://localhost:7227/api/SaleDitails/"

export const Additem=(item)=>{
    return axios.put(`${url}additemtobuy`,item)
}