
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {loading,user} =useContext(AuthContext)
    const location = useLocation();
   
 if(loading){
            return <div className='flex  justify-center mt-5 mb-5'><progress className="progress w-56"></progress></div>
        }
        
          if (user) {
            return children;
          }else{
            Swal.fire({
                title: 'error!',
                text: 'You have to log in first to go this page',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
          }
    
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;