import { Link } from "react-router-dom";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useState } from "react";

const AllProducts = ({product}) => {
    console.log(product);
     
    const [likes, setLikes]=useState(0);
    const [dislikes, setdisLikes]=useState(0);

    const handleLike =()=> {
        setLikes(likes+1);
    };

    const handleDislike =() =>{
        setdisLikes(likes -1);
    };



    return (
        <div className="">
           <section className="   bg-white dark:bg-gray-900">
      <div className="container px-4  mx-auto">
        
        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-1 xl:mt-10 max-w-7xl">
          <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
             {product?.Description}
            </p>

            <div className="flex items-center mt-6">
              <img className="object-cover rounded-full w-16 h-16" src={product?.P_URL} alt="Robbert" />

              <div className="mx-4">
                <Link to={`/home/${product?._id}`}>
                <h1 className="font-semibold text-blue-500">{product?.P_name}</h1>

                </Link>
                <span className="text-sm text-gray-500 dark:text-gray-300">{product?.ProductLink}</span>
                <div className="flex gap-4"> 
             <span className="flex items-center cursor-pointer" onClick={handleLike} ><BiSolidLike />
             <span className="ml-1">{likes}</span>
             </span>
             
             <span className="flex items-center cursor-pointer" onClick={handleDislike} ><BiSolidDislike />
             
             <span className="ml-1">{dislikes}</span>
             
              </span>
             </div>
              </div>
              
             
            </div>
            
          </div>
          
          
        </div>
        
      </div>
      
    </section>
   
   
            
        </div>
    );
};

export default AllProducts;