import axios from "axios";



const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000'
     })
    axiosSecure.interceptors.request.use(function(config){
       const token = localStorage.getItem('access-token')
       
        console.log('request stopped by interceptors',token);
        config.headers.authorization =  `Bearer ${token}`;
        
        return config;
    }, function (error){
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, (error) => {
        const status = error.response.status;
        console.log('status error in the interceptor',status)
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;


// import axios from "axios";

 

//  const axiosSecure = axios.create({
//     baseURL: 'http://localhost:5000'
//  })

// const useAsiosSecure = () => {
//     return axiosSecure;
// };

// export default useAsiosSecure;