import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices/AddServices";
import AllServices from "../components/AllServices/AllServices";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import AllReview from "../components/Review/AllReview";
import ReviewEdit from "../components/Review/ReviewEdit";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
                path: '/allreview',
                element:<PrivateRoute><AllReview></AllReview></PrivateRoute>
            },
            {
                path: '/servicedetails/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
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
            {
                path: '/editreview/:id',
                element:<ReviewEdit></ReviewEdit>
            },
            {
                path: '/addservices',
                element:<AddServices></AddServices>
            },
        ]
    }
])

export default router;