import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

   
  const [product, setProduct] = useState({});
  const { _id } = useParams();
  const details = useLoaderData();
  console.log(product);

  useEffect(() => {
    const findCart = details?.find((item) => item._id === _id);

    setProduct(findCart);
  }, [_id, details]);
    
  
   


    return (
        <div className="">
        <section className="  bg-white dark:bg-gray-900">
   <div className="container px-4  mx-auto">
     
     <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-1 xl:mt-10 max-w-7xl">
       <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
         <p className="leading-loose text-gray-500 dark:text-gray-300">
          {product?.Description}
         </p>

         <div className="flex items-center mt-6">
           <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Robbert" />

           <div className="mx-4">
             <h1 className="font-semibold text-blue-500">{product?.P_name}</h1>
             <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Robert Consultency</span>
           </div>
         </div>
       </div>

       
     </div>
   </div>
 </section>
         
     </div>
    );
};

export default Details;