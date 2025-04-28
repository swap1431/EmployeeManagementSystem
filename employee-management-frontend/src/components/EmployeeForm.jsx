import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import api from '../services/api';  // Ensure the correct import for api

const EmployeeForm = ({ selectedEmployee, onSaved }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    // On receiving selectedEmployee prop, populate form fields if editing
    useEffect(() => {
        if (selectedEmployee) {
            setName(selectedEmployee.name);
            setEmail(selectedEmployee.email);
            setDepartment(selectedEmployee.department);
            setIsEditing(true);
        }
    }, [selectedEmployee]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const employeeData = { name, email, department };

        try {
            if (isEditing) {
                // Edit employee
                await api.updateEmployee(selectedEmployee.id, employeeData);
                alert('Employee updated successfully');
            } else {
                // Add new employee
                await api.addEmployee(employeeData);
                alert('Employee added successfully');
            }
            onSaved(); // Trigger parent component refresh (e.g., reload employee list)
            setName('');
            setEmail('');
            setDepartment('');
            setIsEditing(false);
        } catch (err) {
            console.error('Error saving employee:', err);
            alert('Error saving employee.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Name"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Department"
                        fullWidth
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        {isEditing ? 'Update Employee' : 'Add Employee'}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default EmployeeForm;
