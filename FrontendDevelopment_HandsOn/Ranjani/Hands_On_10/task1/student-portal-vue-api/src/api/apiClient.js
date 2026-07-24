import axios from "axios";


const apiClient = axios.create({

    baseURL: "https://invalid-api-url-test.com",

    headers: {

        "Content-Type": "application/json"

    },

    timeout: 5000

});


// Request Interceptor

apiClient.interceptors.request.use(

    (config) => {


        const token = "mock-token-12345";


        config.headers.Authorization = `Bearer ${token}`;


        return config;

    },


    (error) => {

        return Promise.reject(error);

    }

);



// Response Interceptor

apiClient.interceptors.response.use(

    (response) => {


        return response.data;


    },


    (error) => {


        const standardError = new Error(

            error.response?.data?.message || "Something went wrong"

        );


        standardError.statusCode = error.response?.status || 500;


        throw standardError;


    }

);



export default apiClient;