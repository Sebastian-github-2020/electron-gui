// 路由表  在这里进行 权限校验
import { Route,Routes,useLocation } from "react-router-dom"
import Login from '../pages/Login/Login';
import Home from "../pages/Home";
import useRouterGuard from "./routeGuard";
const MyRoutes = ()=>{
    const location = useLocation()
    // 权限校验
    useRouterGuard(location.pathname)
    return (
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path={'login'} element={<Login />} />
        <Route path={`/home`} element={<Home />}/>
    </Routes>
    )
}
export default MyRoutes