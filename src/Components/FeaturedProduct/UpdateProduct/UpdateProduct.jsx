import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
 
    const Product = useLoaderData()
    const  {
        P_name,
        Description,
        P_URL,
        OwnerName,
        // BoycottingReason,
        OwnerEmail,
        OwnerImage,
        ProductLink
        
    }= Product; 
    return (
        <div>
            <h2>this is update :{P_name}</h2>
            
        </div>
    );
};

export default UpdateProduct;