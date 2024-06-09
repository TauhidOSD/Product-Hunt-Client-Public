import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../../../hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";

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
    
    return (
        <div>
            <h2>This is reported{cards?.length}</h2>
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
                          <th>Favorite Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                          <th>{index + 1}</th>
                          <td>{card?.P_name}</td>
                          <td><Link to={`/home/${card._id}`}><button className="btn btn-active">Details</button>
                          </Link></td>
                          <td>Blue</td>
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