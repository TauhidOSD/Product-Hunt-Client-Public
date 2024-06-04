import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-slate-400">
                <ul className="menu">
                   <li> <NavLink to={"/dashboard/userHome"}>User Home</NavLink></li> 
                   <li> <NavLink to={"/dashboard/AddProduct"}>Add Product</NavLink></li> 
                   <li> <NavLink to={"/dashboard/myProduct"}>My product</NavLink></li> 
                   <li> <NavLink to={"/dashboard/MyProfile"}>My profile</NavLink></li> 
                   <div className="divider"></div>
                   <li> <NavLink to={"/"}>Home</NavLink></li> 

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;