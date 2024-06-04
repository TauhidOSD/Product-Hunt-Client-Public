import FeaturedProduct from "../../../Components/FeaturedProduct/FeaturedProduct";
import TrendingProduct from "../../../Components/FeaturedProduct/TrendingProduct/TrendingProduct";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedProduct></FeaturedProduct>
           <TrendingProduct></TrendingProduct>
            
        </div>
    );
};

export default Home;