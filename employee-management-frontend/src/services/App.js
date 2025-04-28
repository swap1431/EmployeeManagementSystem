import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import axios from 'axios';
import AddEmployee from './components/AddEmployee';


function App() {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleSelectEmployee = (emp) => {
        setSelectedEmployee(emp);
    };

    const triggerRefresh = () => {
        setRefresh(!refresh);
    };

    const API_URL = 'https://your-api-url/api/employees'; // or localhost URL

    const api = {
        getEmployees: () => axios.get(API_URL),
        // add more API functions here
    };

    return (
        <div className="App" style={{ padding: '2rem' }}>
            <h1>Employee Management System</h1>
            <EmployeeForm
                selectedEmployee={selectedEmployee}
                onSaved={triggerRefresh}
            />
            <EmployeeList
                selectEmployee={handleSelectEmployee}
                refreshToggle={refresh}
            />
        </div>
    );
}

export default App;
export default api;
