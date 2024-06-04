import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const FeaturedProduct = () => {


  const {user} =useContext(AuthContext);
  const [Cards, setCards] = useState([]);
  useEffect(() => {
    if(user?.email){
      fetch(`https://alternative-project.vercel.app/RecentQueries?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCards(data));
    }
  }, [user]);

    return (
        <div>
          <h2>length:{Cards?.length}</h2>

        </div>
    );
};

export default FeaturedProduct;