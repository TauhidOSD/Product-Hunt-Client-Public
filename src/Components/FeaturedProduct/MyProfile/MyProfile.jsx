import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [isSubscribed, setIsSubscribed] = useState(false); // State to track subscription status
  const subscriptionAmount = 50; // Subscription amount, you can change it as needed

  const handleSubscribe = () => {
    // Logic to handle subscription
    // Redirect to a payment page or open a modal for payment
    // For now, we simulate a successful payment
    setIsSubscribed(true);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={user?.photoURL}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{user?.displayName}</div>
                </div>
              </div>
            </td>
            <td>{user?.email}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6">
        {!isSubscribed ? (
          <button
            onClick={handleSubscribe}
            className="btn btn-primary"
          >
            Subscribe for ${subscriptionAmount}
          </button>
        ) : (
          <div className="text-green-600 font-semibold">
            Status: Verified
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;



// import { useContext } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";

// const MyProfile = () => {
//   const { user } = useContext(AuthContext);
//   return (
//     <div className="overflow-x-auto">
//       <table className="table">
//         {/* head */}
//         <thead>
//           <tr>
//             <th>
//               <label>
//                 <input type="checkbox" className="checkbox" />
//               </label>
//             </th>
//             <th>Name</th>
//             <th>Email</th>
           
//           </tr>
//         </thead>
//         <tbody>
//           {/* row 1 */}
//           <tr>
//             <th>
//               <label>
//                 <input type="checkbox" className="checkbox" />
//               </label>
//             </th>
//             <td>
//               <div className="flex items-center gap-3">
//                 <div className="avatar">
//                   <div className="mask mask-squircle w-12 h-12">
//                     <img
//                       src={user?.photoURL}
//                       alt="Avatar Tailwind CSS Component"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="font-bold">{user?.displayName}</div>
//                 </div>
//               </div>
//             </td>
//             <td>
//             {user?.email}
              
              
//             </td>
            
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyProfile;
