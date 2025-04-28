// src/services/api.js
import axios from 'axios';

// Update this to your actual backend URL (e.g., localhost or deployed API)
const BASE_URL = 'http://localhost:5000/api/employees';

const api = {
    // Get all employees
    getEmployees: () => axios.get(BASE_URL),

    // Get employee by ID
    getEmployeeById: (id) => axios.get(`${BASE_URL}/${id}`),

    // Add a new employee
    addEmployee: (employeeData) => axios.post(BASE_URL, employeeData),

    // Update existing employee
    updateEmployee: (id, employeeData) => axios.put(`${BASE_URL}/${id}`, employeeData),

    // Delete employee
    deleteEmployee: (id) => axios.delete(`${BASE_URL}/${id}`),
};

export default api;
