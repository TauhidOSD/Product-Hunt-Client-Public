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
            loader : () => fetch('https://product-hunt-server-mu.vercel.app/products')
        },
        {
            path:'/Featured',
            element:<FeaturedProduct></FeaturedProduct>,
            loader : () => fetch('https://product-hunt-server-mu.vercel.app/products')
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
          loader: () => fetch('https://product-hunt-server-mu.vercel.app/products')

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
        path:'ManageUsers',
        element:<ManageUsers></ManageUsers>
      }
        
      ]
    }
  ]);