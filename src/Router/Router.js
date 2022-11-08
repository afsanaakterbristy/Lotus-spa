import { createBrowserRouter } from "react-router-dom";
import AllServices from "../components/AllServices/AllServices";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
           path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/services',
                element:<AllServices></AllServices>
            },
            {
                path: '/servicedetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
        ]
    }
])

export default router;