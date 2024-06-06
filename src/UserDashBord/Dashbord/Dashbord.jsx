import { AiFillProfile } from "react-icons/ai";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdAddBusiness, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const userRole = 'admin'; // Replace with logic to get the user role

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-slate-400">
        <ul className="menu">
          {userRole === 'admin' ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/statistics">
                  <MdAddBusiness /> Statistics
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCoupons">
                  <MdOutlineProductionQuantityLimits /> Manage Coupons
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  <FaUsers /> Manage Users
                </NavLink>
              </li>
            </>
          ) : userRole === 'moderator' ? (
            <>
              <li>
                <NavLink to="/dashboard/productReviewQueue">
                  <FaHome /> Product Review Queue
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reportedContents">
                  <MdAddBusiness /> Reported Contents
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addProduct">
                  <MdAddBusiness /> Add Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myProduct">
                  <MdOutlineProductionQuantityLimits /> My Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myProfile">
                  <AiFillProfile /> My Profile
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;








// import { AiFillProfile } from "react-icons/ai";
// import { FaHome, FaUsers } from "react-icons/fa";
// import {
//   MdAddBusiness,
//   MdOutlineProductionQuantityLimits,
// } from "react-icons/md";
// import { NavLink, Outlet } from "react-router-dom";

// const Dashbord = () => {

//     const isAdmin =true;

//   return (
//     <div className="flex">
//       <div className="w-64 min-h-screen bg-slate-400">
//         <ul className="menu">
//          {
//             isAdmin ? <>

//        <li>
//             {" "}
//             <NavLink to={"/dashboard/adminHome"}>
//               <FaHome /> Admin Home
//             </NavLink>
//           </li>
//           <li>
//             {" "}
//             <NavLink to={"/dashboard/Statistics"}>
//               <MdAddBusiness /> Statistics 
//             </NavLink>
//           </li>
//           <li>
//             {" "}
//             <NavLink to={"/dashboard/ManageCoupons "}>
//               <MdOutlineProductionQuantityLimits />
//               ManageCoupons 
//             </NavLink>
//           </li>
//           <li>
//             {" "}
//             <NavLink to={"/dashboard/ManageUsers"}> <FaUsers /> ManageUsers</NavLink>
//           </li>
//             </>
//             :
//             <>
//              <li>
//             {" "}
//             <NavLink to={"/dashboard/userHome"}>
//               <FaHome /> User Home
//             </NavLink>
//           </li>
//           <li>
//             {" "}
//             <NavLink to={"/dashboard/AddProduct"}>
//               <MdAddBusiness /> Add Product
//             </NavLink>
//           </li>
//           <li>
//             {" "}
//             <NavLink to={"/dashboard/myProduct"}>
//               <MdOutlineProductionQuantityLimits />
//               My product
//             </NavLink>
//           </li>
//           <li>
//             {" "}
//             <NavLink to={"/dashboard/MyProfile"}><AiFillProfile /> My profile</NavLink>
//           </li>
//             </>

//          }
//           <div className="divider"></div>
//           <li>
//             {" "}
//             <NavLink to={"/"}>Home</NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="flex-1">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashbord;
