import {Navigate, Outlet} from "react-router-dom";
import ECookieValues from "../../../domain/common/enum";
import Cookies from "js-cookie";

const AuthGuard = () => {

    const token = Cookies.get(ECookieValues.ACCESS_TOKEN)


    return token ? <Outlet/> : <Navigate to={'/'}/>

};
const NotAuthGuard = () => {

    const token = Cookies.get(ECookieValues.ACCESS_TOKEN)


    return token ? <Navigate to={'/disk'}/> : <Outlet/>

};


export {AuthGuard, NotAuthGuard};