import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import api from '../services/api';

const EditEmployee = ({ selectedEmployee, onUpdated }) => {
    const [employee, setEmployee] = useState(selectedEmployee || {});

    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!employee.name || !employee.email || !employee.department) {
            alert('Please fill all fields');
            return;
        }

        api.updateEmployee(employee.id, employee)
            .then(res => {
                alert('Employee updated successfully!');
                onUpdated(); // Trigger refresh in parent component
            })
            .catch(err => {
                console.error('Error updating employee:', err);
                alert('Failed to update employee');
            });
    };

    return (
        <Paper sx={{ p: 4, maxWidth: 500, mx: 'auto', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Edit Employee
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={employee.email}
                        onChange={handleChange}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Department"
                        name="department"
                        value={employee.department}
                        onChange={handleChange}
                        required
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Save Changes
                </Button>
            </form>
        </Paper>
    );
};

export default EditEmployee;
