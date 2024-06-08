import { useContext, useEffect, useState } from "react";
import { AiFillProfile } from "react-icons/ai";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdAddBusiness, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";

const Dashboard = () => {
  const axiosSecure = useAxiosSecure();

  
  const{user}=useContext(AuthContext);
  console.log(user);

  const [loading, setLoading] = useState()
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModerator, setIsModerator] = useState(false);

  useEffect(() => {
    axiosSecure.get("/users")
    
      
      .then((data) => {
        const currentUser = data?.data?.find(u => u.email === user?.email);
        setIsAdmin(currentUser?.role === 'admin');
        setIsModerator(currentUser?.role === 'moderator');
       setLoading(false)
      })
      .catch((error) => console.error("Error fetching users:", error));
      setLoading(false)
  }, [user]);
  if (loading) {
    return <div>Loading...</div>;
}
   // Replace with logic to get the user role

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-slate-400">
        <ul className="menu">
          {isAdmin ? (
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
                  <FaUsers /> Manage Usersr
                </NavLink>
              </li>
            </>
          ) : isModerator  ? (
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
