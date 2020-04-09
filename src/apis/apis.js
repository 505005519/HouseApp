import axios from "axios";

axios.defaults.baseURL="http://localhost:8000";

export  let getLoginApi=()=>{ //多个接口 所以不用default
     return axios.post("/login");
 }