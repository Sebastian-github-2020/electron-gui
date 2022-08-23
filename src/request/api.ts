/**
 * api
 */
import {request} from "./request";

// 1. login

const apiLogin = (data:{"username":string,"password":string}) => request.post("/token/", data)


export {
    apiLogin
}