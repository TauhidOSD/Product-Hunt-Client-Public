import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import AllProducts from "../AllProducts";
import { Link, NavLink } from "react-router-dom";

const TrendingProduct = () => {
  const { user } = useContext(AuthContext);

  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      <div className="md:text-center px-4 md:px-32 md:mt-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
          Our <span className="text-blue-500"> Trending</span> products{" "}
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

      <div className="grid md:grid-cols-2 grid-cols-1">
      {Cards.length > 0 &&
        Cards?.slice(0, 6).map((Card) => (
          <AllProducts key={Card._id} product={Card}></AllProducts>
        ))}
      </div>
      <li   className="flex justify-center"> 
      <NavLink to={"/Products"}>

        <button  className="btn  justify-center btn-outline border-0 border-b-4 mb-6   mt-4"> Show All Products</button>

        </NavLink> 

</li>
    </div>
  );
};

export default TrendingProduct;
