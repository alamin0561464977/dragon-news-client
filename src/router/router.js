import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import NewsDetails from "../Pages/Category/NewsDetails/NewsDetails";
import Home from "../Pages/Home/Home";
import PrivateRout from "../Pages/PrivateRout/PrivateRout";
import SignIn from "../Pages/Shared/LeftSideNav/SignIn/SignIn";
import UpdateProfile from "../Pages/Shared/UpdateProfile/UpdateProfile";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/home'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/home'),
                element: <Home></Home>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/news-details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news-details/${params.id}`),
                element: <PrivateRout><NewsDetails></NewsDetails></PrivateRout>
            },
            {
                path: '/update-profile',
                element: <PrivateRout><UpdateProfile></UpdateProfile></PrivateRout>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news-categories/${params.id}`),
                element: <Category></Category>
            },
        ]
    }
])