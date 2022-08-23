import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useEffect, useState} from "react";

// 路由拦截器
function useRouterGuard(pathname: string) {
    // 校验权限 判定是否有token
    console.log("校验权限", pathname);
    // navigate
    let navigate = useNavigate()

    // @ts-ignore
    const [token] = useState(useSelector(state => state.token))

    useEffect(function (){
        if(token.length<1){
            // 转到登录
            // console.log("token失效")
            navigate("/")
        }
    },[token])

}

export default useRouterGuard