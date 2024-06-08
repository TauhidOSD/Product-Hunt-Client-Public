import { useLoaderData } from "react-router-dom";
import AllProducts from "../AllProducts";
import { key } from "localforage";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="md:text-center px-4 md:px-32 md:mt-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
          Our <span className="text-blue-500"> All</span> products{" "}
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

     <div className="grid md:grid-cols-2 grid-cols-1 mb-10">
     {
      
     products?.data?.length > 0 &&
        products?.data?.map((product) => (
          
          <AllProducts key={product?._id} product={product}></AllProducts>
        ))}
     </div>
    </div>
  );
};

export default Products;
