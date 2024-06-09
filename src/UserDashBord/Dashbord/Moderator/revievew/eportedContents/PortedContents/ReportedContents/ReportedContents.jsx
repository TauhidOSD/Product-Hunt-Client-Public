import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../../../hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReportedContents = () => {
    
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

    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/products/${_id}`)
              .then((response) => {
                if (response.data?.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your product has been deleted.", "success");
                  setCards(cards.filter((card) => card._id !== _id));
                }
              })
              .catch((error) => {
                console.error("Error deleting product:", error);
                Swal.fire("Error!", "There was an error deleting the product.", "error");
              });
          }
        });
      };

    return (
        <div>
            
            {
                cards.map((card,index)=>(

                    <div key={card?._id} className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th></th>
                          <th>ProductName</th>
                          <th>ProductDetails</th>
                          <th>DeleteProduct</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                          <th>{index + 1}</th>
                          <td>{card?.P_name}</td>
                          <td><Link to={`/home/${card._id}`}><button className="btn btn-active">Details</button>
                          </Link></td>
                          <th>
                    <button  onClick={() => handleDelete(card._id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </th>
                        </tr>
                        
                        
                      </tbody>
                    </table>
                  </div>
                ))
            }
        
            
        </div>
    );
};

export default ReportedContents;