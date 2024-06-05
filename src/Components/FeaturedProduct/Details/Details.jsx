import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const Details = () => {

   const {user}=useContext(AuthContext);
  const [product, setProduct] = useState({});
  const { _id } = useParams();
  const details = useLoaderData();
  console.log(product);

  useEffect(() => {
    const findCart = details?.find((item) => item._id === _id);

    setProduct(findCart);
  }, [_id, details]);

  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
    


  const handleAddReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const comment = form.comment.value;
   
    

    const review = {
        name,
        image,
        comment
       
        
    }
    console.log(review);

    axios.post("http://localhost:5000/review",review,
)
// .then(res =>res.json())
.then(data=>{
    console.log(data);
    if(data?.data?.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'User added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
})
  
}


    return (
       <div>
         <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      {/* Job Details */}
      <div className="flex " >
      <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-light text-gray-800 '>
            Deadline: 12/08/2024
          </span>
         
        </div>

        <div>
          <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
            {product?.P_name}
          </h1>

          <p className='mt-2 text-lg text-gray-600 '>
            {product?.Description}
          </p>
          <p className='mt-6 text-sm font-bold text-gray-600 '>
            Buyer Details:
          </p>
          <div className='flex items-center gap-5'>
            <div>
              <p className='mt-2 text-sm  text-gray-600 '>{product?.OwnerName}</p>
              <p className='mb-6 mt-2 text-sm  text-gray-600 '>
                Email:{product?.OwnerEmail}
              </p>
            </div>
            <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
              <img src='' alt='' />
            </div>
          </div>
          <img className="text-start h-[80px] w-[120px]" src={product?.OwnerImage} alt="" />
        </div>
        
      </div>
      <div className="">
        <img className="text-start h-[360px] w-[350px]" src={product?.P_URL} alt="" />

        </div>

        

      </div>
      
      {/* Place A Bid Form */}
      <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Post Review
        </h2>

        <form onSubmit={handleAddReview} >
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='price'>
                Reviewer Name
              </label>
              <input
                id='price'
                type='text'
                name='name'
                defaultValue={user?.displayName}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
               Reviewer Image
              </label>
              <input
                id='emailAddress'
                type='text'
                name='image'
                defaultValue={user?.photoURL}
                
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='comment'>
                Description
              </label>
              <input
                id='comment'
                name='comment'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'></label>

              {/* Date Picker Input Field */}
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
             Submit
            </button>
          </div>
        </form>
      </section>
{/* review section */}

<div>
    
</div>
      
    </div>

    {/* review section */}
    <div className="md:text-center px-4 md:px-32 md:mt-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
           <span className="text-blue-500"> Review</span> products{" "}
        </h1>
        <p className="md:px-12">
          Recent queries on alternative products highlight growing interest in
          sustainable and ethical options. Examples include eco-friendly
          clothing, zero-waste packaging solutions, and plant-based
          alternatives. Consumers seek products aligned with their values,
          promoting environmental responsibility and supporting ethical
          practices in various industries.
        </p>
      </div>
   {Cards?.map ((Card)=>(
    <div key={Card?._id} className="">
    <section className="   bg-white dark:bg-gray-900">
<div className="container px-4  mx-auto">
 
 <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-1 xl:mt-10 max-w-7xl">
   <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
     <p className="leading-loose text-gray-500 dark:text-gray-300">
       {Card?.comment}
     </p>

     <div className="flex items-center mt-6">
       <img className="object-cover rounded-full w-14 h-14" src={Card?.image}/>

       <div className="mx-4">
         {/* <Link to={`/home/${product?._id}`}>
         <h1 className="font-semibold text-blue-500">{product?.P_name}</h1>

         </Link> */}
         <span className="text-sm text-gray-500 dark:text-gray-300">{Card?.name}</span>
       </div>
     </div>
   </div>

   
 </div>
</div>
</section>
     
 </div>

   ))}
    

       </div>
    
        
    );
};

export default Details;