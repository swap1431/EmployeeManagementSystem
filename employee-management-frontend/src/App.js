// src/App.js

import React, { useState, useEffect } from 'react';
//import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import AddEmployee from './components/AddEmployee';
import api from './services/api'; // Importing the api service

function App() {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await api.getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };
        fetchEmployees();
    }, [refresh]);

    const handleSelectEmployee = (emp) => {
        setSelectedEmployee(emp);
    };

    const triggerRefresh = () => {
        setRefresh(!refresh); // Trigger re-fetch of employee data
    };

    return (
        <div className="App" style={{ padding: '2rem' }}>
            <h1>Employee Management System</h1>

            {/* Add or Edit Employee Form */}
            {selectedEmployee ? (
                <EditEmployee selectedEmployee={selectedEmployee} onUpdated={triggerRefresh} />
            ) : (
                <AddEmployee onSaved={triggerRefresh} />
            )}

            {/* Employee List with delete functionality */}
            <EmployeeList
                employees={employees}
                selectEmployee={handleSelectEmployee}
                refreshToggle={triggerRefresh}
            />
        </div>
    );
}

export default App;
