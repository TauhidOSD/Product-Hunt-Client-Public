import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";

const Review = () => {
    const axiosSecure = useAxiosSecure();
    const [cards, setCards] = useState([]);
    const [statuses, setStatuses] = useState({});

    useEffect(() => {
        axiosSecure.get("/products")
            .then((data) => {
                if (Array.isArray(data?.data)) {
                    setCards(data?.data);
                } else {
                    throw new Error('Fetched data is not an array');
                }
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleAccept = (id) => {
        // Update the status in the server here if needed
        setStatuses((prevStatuses) => ({
            ...prevStatuses,
            [id]: 'Accepted'
        }));
    };

    const handleReject = (id) => {
        // Update the status in the server here if needed
        setStatuses((prevStatuses) => ({
            ...prevStatuses,
            [id]: 'Rejected'
        }));
    };

    return (
        <div>
            <h2>Products: {cards?.length}</h2>
            {cards.map((card, index) => (
                <div key={card._id} className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>ProductName</th>
                                <th>ProductDetails</th>
                                <th>Featured</th>
                                
                                <th>Actions</th>
                                <th>Actions</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{card?.P_name}</td>
                                <td>
                                    <Link to={`/home/${card._id}`}>
                                        <button type="submit" className="btn bg-orange-300">Details</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/Featured">
                                        <button type="submit" className="btn bg-red-300">Featured</button>
                                    </Link>
                                </td>
                                
                                    <td><button
                                        type="submit " className="btn bg-green-500"
                                        onClick={() => handleAccept(card._id)}
                                        disabled={statuses[card._id] === 'Accepted' || statuses[card._id] === 'Rejected'}
                                    >
                                        Accept
                                    </button></td>
                                    <td><button
                                        type="submit" className="btn bg-red-500"
                                        onClick={() => handleReject(card._id)}
                                        disabled={statuses[card._id] === 'Rejected' || statuses[card._id] === 'Accepted'}
                                    >
                                        Reject
                                    </button></td>
                                
                                <td>{statuses[card._id]}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Review;


// import { useEffect, useState } from "react";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
// import { Link } from "react-router-dom";



// const Review = () => {


//     const axiosSecure = useAxiosSecure();
//     const [cards, setCards] = useState([]);

//     useEffect(() => {
//         axiosSecure.get("/products")
            
//             .then((data) => {
//                 console.log(data.data);
//                 if (Array.isArray(data?.data)) {
//                     setCards(data?.data);
//                 } else {
//                     throw new Error('Fetched data is not an array');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching users:', error);
//             });
//     }, []);


//     return (
        
//         <div>
//           <h2>products : {cards?.length}</h2>
//         {cards.map((card,index)=>(
//                 <div key={card._id} className="overflow-x-auto">
//                 <table className="table">
//                   {/* head */}
//                   <thead>
//                     <tr>
//                       <th></th>
//                       <th>ProductName</th>
//                       <th>ProductDetails</th>
//                       <th>Featured</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* row 1 */}
//                     <tr className="bg-base-200">
//                       <th>{index + 1}</th>
//                       <td>{card?.P_name}</td>
//                       <td><Link to={'/home/:_id'} ><button className="btn">Details</button> </Link></td>
//                       <td><Link to={'/Featured'}><button className="btn btn-active">Featured</button>
//                       </Link></td>
//                     </tr>
                   
                    
//                   </tbody>
//                 </table>
//               </div>
//         ))
            
//         }
        
            
//         </div>
//     );
// };

// export default Review;