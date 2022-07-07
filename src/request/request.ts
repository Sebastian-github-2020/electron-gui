import axios from 'axios'

// base url
const BASE_URL = "http://127.0.0.1:8000"
//超时时间
const TIMEOUT = 5000
// token
const Authorization = ""
//1. 创建实例
const request = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: {
        "Content-Type": "application/json",
        "Authorization":Authorization
    }
})

// 响应拦截器
request.interceptors.response.use(function (response){
    // 2xx响应回触发
    return response
},function (err){
    // 超出2xx响应码 在此响应
    return Promise.reject(err)
})

export {
    Authorization,
    request,
}