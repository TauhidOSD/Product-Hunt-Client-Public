import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const UserHome = () => {
    const {user} =useContext(AuthContext)
    return (
        <div>
            <h2>Hi </h2>
            {
              user?.displayName ? user.displayName : 'Back'   
            }
        </div>
    );
};

export default UserHome;