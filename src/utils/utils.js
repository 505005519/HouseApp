import axios from "axios";
import qs from "qs";

// 请求拦截器  两个函数作为参数=====================================
axios.interceptors.request.use( (req)=>{
    // console.log("req",req);
    if(req.method==="post"){
       req.data=qs.stringify(req.data);
    }
    let token=sessionStorage.getItem("token"); //error!  getItem("token")
    if(token){//一般token都会放在header里面传输
        req.headers.token=token;
    }
    return req;
},(err)=>{ return Promise.reject(err)}); //error!  return

// 响应拦截器：数据过滤 统一处理错误信息==============================
axios.interceptors.response.use( (res)=>{
    // console.log("res",res);
    switch(res.status){
        // 200 301 302 304 403 404 500
         case 200: console.log("调取接口XXX成功！"); break;

         case 301: console.log("永久重定向"); break;
         case 302: console.log("临时重定向"); break;
         case 304: console.log("缓存"); break;

         case 403: console.log("服务器拒绝了您的请求"); break;
         case 404: console.log("请求地址错误！"); break;

         case 500: console.log("服务器错误！"); break;
    }
    return res;
},
(err)=>{ return Promise.reject(err) })