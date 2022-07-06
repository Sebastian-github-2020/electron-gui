/**
 * api
 */
import {request} from "./request";

// 1. login

const apiLogin = () => request.post("/login", {
    "username": "",
    "password": ""
})


export {
    apiLogin
}