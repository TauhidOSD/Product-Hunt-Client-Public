import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";

const AminHome = () => {
   const {user}=useContext(AuthContext)
   console.log(user);
    return (
        <div>
            <h2>Hi</h2>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default AminHome;