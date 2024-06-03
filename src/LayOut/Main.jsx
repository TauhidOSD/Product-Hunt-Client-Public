import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import Navber from "../Pages/Home/Home/Shared/Footer/Navber/Navber";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;