import { useEffect, useState,  } from "react";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    
    const [Cards, setCards] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    console.log(Cards);

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // Update the user role in the local state
                    setCards(Cards.map(card => card._id === user._id ? { ...card, role: 'admin' } : card));
                }
            })
            .catch(error => {
                console.error('Error making user admin:', error);
            });
    };

    return (
        <div>
            <h2>This is user: {Cards?.length}</h2>
            <div className="overflow-x-auto ">
                <table className="table my-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Username</th>
                            <th>Useremail</th>
                            <th>MakeModerator</th>
                            <th>MakeAdmin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Cards.map((Card, index) =>
                            <tr key={Card?._id} className="bg-base-200 ">
                                <th>{index + 1}</th>
                                <td>{Card?.name}</td>
                                <td>{Card?.email}</td>
                                <td>Moderator</td>
                                <td>
                                    {Card.role === 'admin' ? 'Admin' : 
                                        <button onClick={() => handleMakeAdmin(Card)}
                                            className="btn btn-sm bg-orange-500 ">
                                            <FaUser className="text-white text-xl "></FaUser>
                                        </button>
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;




// // import { useQuery } from "@tanstack/react-query";
// import useAsiosSecure from "../../../hooks/useAsiosSecure/useAsiosSecure";

// import {  useContext, useEffect, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../provider/AuthProvider";

// const ManageUsers = () => {
//     const {user}= useContext(AuthContext);
// const axiosSecure =useAsiosSecure();
// //     const {data: users = [] }=useQuery({
// //         queryKey:['users'],
// //         queryFn: async () => {
// //             const res = await axiosSecure.get('/users');
// //             return res.data;
// //         }
// //     })

// const [Cards, setCards] = useState([]);
// useEffect(() => {
//   fetch("http://localhost:5000/users")
//     .then((res) => res.json())
//     .then((data) => setCards(data));
// }, []);
//  console.log(Cards);


//  const handleMakeAdmin = user => {
//     axiosSecure.patch(`/users/admin/${user._id}`)
//     .then(res => {
//         console.log(res.data)
//         if(res.data.modifiedCount >0){
            
//             Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: `${user.name} is an Admin Now`,
//                 showConfirmButton: false,
//                 timer: 1500
//               });
//         }
//     })
//  }


//     return (

       
//        <div>
//         <h2>This is user: {Cards?.length}</h2>
         
//             <div  className="overflow-x-auto ">
//             <table className="table my-4">
//               {/* head */}
//               <thead>
//                 <tr>
//                   <th> </th>
//                   <th>Username</th>
//                   <th>Useremail</th>
//                   <th>MakeModerator</th>
//                   <th>MakeAdmin</th>
//                 </tr>
//               </thead>
//               <tbody >
//                 {/* row 1 */}
//                 {
//                     Cards.map((Card,index)=>
//                         <tr key={Card?._id} className="bg-base-200 ">
//                     <th>{index+1}</th>
//                     <td>{Card?.name}</td>
//                     <td>{Card?.email}</td>
                    
//                     <td>Moderator</td>
//                     <td>
//                         { user.role === 'admin' ? 'Admin' : <button onClick={()=> handleMakeAdmin(Card)}
                        
//                         className="btn btn-sm bg-orange-500 "
                        
//                         >
//                             <FaUser className="text-white text-xl "></FaUser>
                            
//                         </button>}
//                     </td>
//                   </tr>
                  
                    
//                     )
//                 }
               
                
//               </tbody>
//             </table>
//           </div>
            
        
//        </div>
       
        
//     );
// };

// export default ManageUsers;