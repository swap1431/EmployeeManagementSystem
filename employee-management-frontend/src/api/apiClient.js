import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, // Base URL from environment variables
    headers: {
        'Content-Type': 'application/json',
        // Add other default headers here if needed
    },
    timeout: 5000, // Set a timeout limit for requests (optional)
    // You can add other configuration options here
});

// Add a request interceptor if you need to modify requests before they are sent
apiClient.interceptors.request.use(
    (config) => {
        // Perform actions before the request is sent, such as adding authentication tokens
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle responses globally
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors globally
        console.error('API call failed:', error);
        return Promise.reject(error);
    }
);

export default apiClient;
