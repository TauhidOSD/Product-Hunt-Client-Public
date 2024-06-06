// import { useQuery } from "@tanstack/react-query";
// import useAsiosSecure from "../../../hooks/useAsiosSecure/useAsiosSecure";

import { useEffect, useState } from "react";

const ManageUsers = () => {
// const axiosSecure =useAsiosSecure();
//     const {data: users = [] }=useQuery({
//         queryKey:['users'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/users');
//             return res.data;
//         }
//     })

const [Cards, setCards] = useState([]);
useEffect(() => {
  fetch("http://localhost:5000/users")
    .then((res) => res.json())
    .then((data) => setCards(data));
}, []);
 console.log(Cards);


    return (

       
       <div>
        <h2>This is user: {Cards?.length}</h2>
         {Cards.map((Card)=>
            <div key={Card?._id} className="flex justify-evenly my-4">
            <h2 className="text-3xl">All Users</h2>
            <h2 className="text-3xl">Total Users: </h2>
            
        </div>
            
        )}
       </div>
       
        
    );
};

export default ManageUsers;