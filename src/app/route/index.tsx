import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthPage from "../pages/user/auth";
import RegisterPage from "../pages/user/registration";
import DiskPage from "../pages/disk";
import {AuthGuard, NotAuthGuard} from "../pages/guard";


const router = createBrowserRouter([
    {
        element: <NotAuthGuard/>,
        children: [
            {
                path: '/',
                element: <AuthPage/>
            },
            {
                path: '/reg',
                element: <RegisterPage/>
            },
        ]
    },
    {
        path: '/',
        element: <AuthGuard/>,
        children: [
            {
                path: '/disk',
                element: <DiskPage/>
            },
            {
                path: '/disk/:id',
                element: <DiskPage/>
            },
        ]
    }

])
const AppRouter = () => {
    return <RouterProvider router={router}/>

}

export default AppRouter