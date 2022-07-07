/**
 * api
 */
import {request} from "./request";

// 1. login

const apiLogin = (data:{"username":string,"password":string}) => request.post("/login", data)


export {
    apiLogin
}