// 路由表  在这里进行 权限校验
import {Route, Routes, useLocation} from "react-router-dom"
import Login from '../pages/Login/Login';
import Home from "../pages/Home";
import useRouterGuard from "./routeGuard";
import CopyEditor from "../pages/CopyEditor";

const MyRoutes = () => {
    const location = useLocation()
    // 权限校验
    useRouterGuard(location.pathname)
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={`/home`} element={<Home/>}>
                <Route path={"editor"} element={<CopyEditor/>}/>
                <Route path={""} element={<div>项目介绍</div>}/>
            </Route>
        </Routes>
    )
}
export default MyRoutes