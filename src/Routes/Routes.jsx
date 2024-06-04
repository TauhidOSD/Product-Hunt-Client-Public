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

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/Products',
            element:<Products></Products>,
            loader : () => fetch('http://localhost:5000/products')
        },
        {
            path:'/Featured',
            element:<FeaturedProduct></FeaturedProduct>,
            loader : () => fetch('http://localhost:5000/products')
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
        }
        
        
      ]
    },
    {
      path:'/dashboard',
      element:<Dashbord></Dashbord>,
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
        
        }
      ]
    }
  ]);