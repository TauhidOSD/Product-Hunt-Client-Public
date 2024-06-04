import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AllProducts from "./AllProducts";

const FeaturedProduct = () => {


  const {user}=useContext(AuthContext)

  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

    return (
        <div className="">
          <h2>length:{Cards?.length}</h2>
          {
               Cards.length > 0 &&
               Cards?.slice(0,2).map(Card => <AllProducts
                key={Card._id}
                product={Card}
                >

                </AllProducts>)
            }

        </div>
    );
};

export default FeaturedProduct;