import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const UpdateProduct = () => {
    const {user } = useContext(AuthContext)

    const Product = useLoaderData()
    const  {
        _id,
        P_name,
        Description,
        P_URL,
        ProductLink
        
    }= Product;
    
    const handleUpdate = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const P_name = form.P_name.value;
        const Description = form.Description.value;
        const P_URL = form.P_URL.value;
        const OwnerName = form.OwnerName.value;
        const OwnerEmail = form.OwnerEmail.value;
        const OwnerImage = form.OwnerImage.value;
        const ProductLink = form.ProductLink.value;
        
    
        const Quries = {
            P_name,
            Description,
            P_URL,
            OwnerName,
            // BoycottingReason,
            OwnerEmail,
            OwnerImage,
            ProductLink
        }
        


        axios.put(`https://product-hunt-server-mu.vercel.app/products/${_id}`,Quries,
        )
        // .then(res =>res.json())
        .then(data=>{
            console.log(data);
            if(data?.data?.modifiedCount >0 ){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }
    return (
        <div className="bg-[#F4F3F0] p-4 md:p-24">
        <h2 className="text-3xl font-extrabold text-center my-6">Update Product</h2>
        <form onSubmit={handleUpdate}>
          {/*image and sportName */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="P_name"
                  defaultValue={P_name}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label>
                <input
                  type="text"
                  name="Description"
                  defaultValue={Description}
                  placeholder="product Brand"
                  
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* country and location  */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Image-URL</span>
              </label>
              <label>
                <input
                  type="text"
                  name="P_URL"
                  defaultValue={P_URL}
                  placeholder="Product Image-URL"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Owner Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="OwnerName"
                  defaultValue={user?.displayName}
                  placeholder="Owner Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* Description and cost  */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Owner Email</span>
              </label>
              <label>
                <input
                  type="email"
                  name="OwnerEmail"
                  placeholder="OwnerEmail"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Owner Image</span>
              </label>
              <label>
                <input
                  type="text"
                  name="OwnerImage"
                  placeholder="OwnerImage"
                  defaultValue={user?.photoURL}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Link</span>
              </label>
              <label>
                <input
                  type="text"
                  name="ProductLink"
                  defaultValue={ProductLink}
                  placeholder="ProductLink"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            
          </div>
         
          
  
          <input
            type="submit"
            value="Please Update "
            className="btn btn-block bg-slate-700 text-white font-bold text-xl"
          />
        </form>
      </div>
    );
};

export default UpdateProduct;