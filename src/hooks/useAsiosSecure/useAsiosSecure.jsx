import axios from "axios";

 

 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
 })

const useAsiosSecure = () => {
    return axiosSecure;
};

export default useAsiosSecure;