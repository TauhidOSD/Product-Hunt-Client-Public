import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";



const Review = () => {


    const axiosSecure = useAxiosSecure();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axiosSecure.get("/products")
            
            .then((data) => {
                console.log(data.data);
                if (Array.isArray(data?.data)) {
                    setCards(data?.data);
                } else {
                    throw new Error('Fetched data is not an array');
                }
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);


    return (
        
        <div>
          <h2>products : {cards?.length}</h2>
        {cards.map((card,index)=>(
                <div key={card._id} className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>ProductName</th>
                      <th>ProductDetails</th>
                      <th>Featured</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                      <th>{index + 1}</th>
                      <td>{card?.P_name}</td>
                      <td><Link to={'/home/:_id'} ><button className="btn">Details</button> </Link></td>
                      <td><Link to={'/Featured'}><button className="btn btn-active">Featured</button>
                      </Link></td>
                    </tr>
                   
                    
                  </tbody>
                </table>
              </div>
        ))
            
        }
        
            
        </div>
    );
};

export default Review;