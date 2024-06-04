import { useLoaderData } from "react-router-dom";
import AllProducts from "../AllProducts";

const Products = () => {
    const products =useLoaderData();
    return (
        <div>
            <h2>This is all product:{products.length}</h2>   
            {
                products.length > 0 &&
                products?.slice(0,2).map(product => <AllProducts
                key={product._id}
                product={product}
                >

                </AllProducts>)
            }         
        </div>
    );
};

export default Products;