import { AiFillProfile } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import {
  MdAddBusiness,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-slate-400">
        <ul className="menu">
          <li>
            {" "}
            <NavLink to={"/dashboard/userHome"}>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/dashboard/AddProduct"}>
              <MdAddBusiness /> Add Product
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/dashboard/myProduct"}>
              <MdOutlineProductionQuantityLimits />
              My product
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/dashboard/MyProfile"}><AiFillProfile /> My profile</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
