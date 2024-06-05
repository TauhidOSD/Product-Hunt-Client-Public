import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const MyProduct = () => {

    const {_id}= useParams();

    const {user}=useContext(AuthContext);

    const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch(`https://product-hunt-server-mu.vercel.app/productsbyemail/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, [user]);
  console.log(user);
  console.log(Cards._id);
  
  const handleDelete = _id =>{
    console.log(_id);
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
        
        fetch(`https://product-hunt-server-mu.vercel.app/products/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });  
            }
        })
        }
      });
  }

// 



 

    return (
        <div>
            <section>
        {Cards.map((Card) => (
          <div key={Card?._id}  className="overflow-x-auto">
            <table className="table my-6">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Product image</th>
                  <th>Name</th>
                  <th>product Name</th>
                  <th>Product Brand</th>

                  <th>Delete</th>
                  <th>Update</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded-xl w-[156px] h-[156px]">
                          <img
                            src=""
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src=""
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">display</div>
                        <div className="text-sm opacity-50">email</div>
                      </div>
                    </div>
                  </td>

                  <td>product name</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      Product Brand
                    </button>
                  </th>

                  <th>
                    <button onClick={()=>handleDelete(Card?._id)} 
                    
                  
                    className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          // stroke-linecap="round"
                          // stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </th>
                  <th>
                    <Link to={`/dashboard/update/${Card?._id}`} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </Link>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
         ))} 
      </section>

        </div>
    );
};

export default MyProduct;