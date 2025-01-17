import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Products from "../Components/FeaturedProduct/Products/Products";
import Dashbord from "../UserDashBord/Dashbord/Dashbord";
import MyProduct from "../Components/FeaturedProduct/MyProduct/MyProduct";
import AddProduct from "../Components/FeaturedProduct/AddProduct/AddProduct";
import MyProfile from "../Components/FeaturedProduct/MyProfile/MyProfile";
import FeaturedProduct from "../Components/FeaturedProduct/FeaturedProduct";
import TrendingProduct from "../Components/FeaturedProduct/TrendingProduct/TrendingProduct";
import UpdateProduct from "../Components/FeaturedProduct/UpdateProduct/UpdateProduct";
import Details from "../Components/FeaturedProduct/Details/Details";
import NotFoundPage from "../Components/FeaturedProduct/NotFoundPage/NotFoundPage";
import PrivateRoute from "../Components/FeaturedProduct/PrivateRoute/PrivateRoute";
import ManageUsers from "../UserDashBord/Dashbord/ManageUsers/ManageUsers";
import UserHome from "../UserDashBord/Dashbord/UserHome/UserHome";
import AminHome from "../UserDashBord/Dashbord/AdminDashBoad/AminHome/AminHome";
import useAxiosSecure from "../hooks/useAxiosSecure/useAxiosSecure";
import Review from "../Components/FeaturedProduct/ModeratorDashBoard/Review/Review";
import Statistics from "../UserDashBord/Dashbord/AdminDashBoad/AminHome/Statistics/Statistics";
import ReportedContents from "../UserDashBord/Dashbord/Moderator/revievew/eportedContents/PortedContents/ReportedContents/ReportedContents";

const axiosSecure = useAxiosSecure();

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFoundPage></NotFoundPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/Products',
            element:<Products></Products>,
            loader : () => axiosSecure ('/products')
        },
        {
            path:'/Featured',
            element:<FeaturedProduct></FeaturedProduct>,
            loader : () => axiosSecure('/products')
        },
        {
          path:'/TrendingProduct',
          element:<TrendingProduct></TrendingProduct>
        },
        
        
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/home/:_id',
         
          element:<PrivateRoute>
            
            <Details></Details>,
          </PrivateRoute>,
          loader: () => axiosSecure ('/products')

        }
       
        
        
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute>
        <Dashbord></Dashbord>,
      </PrivateRoute>,
      children:[

        {

          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'myProduct',
          element:<MyProduct></MyProduct>

        },
        {
          
            path:'AddProduct',
            element:<AddProduct></AddProduct>
        
        },
        {
          
            path:'MyProfile',
            element:<MyProfile></MyProfile>
        
        },
        {
          
          path:'update/:id',
          element:<UpdateProduct></UpdateProduct>,
          loader: ({params}) => fetch(`https://product-hunt-server-mu.vercel.app/products/${params.id}`)
      
      },
      //admin routes

      {

        path:'adminHome',
        element:<AminHome></AminHome>
      },

      {
        path:'ManageUsers',
        element:<ManageUsers></ManageUsers>
      },
      {
        path:'Statistics',
        element:<Statistics></Statistics>
      },
      //moderator
      {
        path:'productReviewQueue',
        element:<Review></Review>
      },
      {
        path:'reportedContents',
        element:<ReportedContents></ReportedContents>
      }
        
      ]
    }
  ]);