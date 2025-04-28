import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import api from '../services/api';

const AddEmployee = ({ onSaved }) => {
    const [employee, setEmployee] = useState({
        name: '',
        designation: '',
        dateOfJoin: '',
        salary: '',
        gender: '',
        state: '',
        dateOfBirth: ''
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.addEmployee(employee);
            alert('Employee added successfully!');
            onSaved?.(); // Refresh list
            setEmployee({
                name: '',
                designation: '',
                dateOfJoin: '',
                salary: '',
                gender: '',
                state: '',
                dateOfBirth: ''
            });
        } catch (error) {
            console.error('Error adding employee:', error);
            alert('Failed to add employee');
        }
    };

    return (
        <Paper sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Add New Employee
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <TextField fullWidth label="Name" name="name" value={employee.name} onChange={handleChange} required />
                </Box>
                <Box mb={2}>
                    <TextField fullWidth label="Designation" name="designation" value={employee.designation} onChange={handleChange} required />
                </Box>
                <Box mb={2}>
                    <TextField fullWidth label="Date of Join" type="date" name="dateOfJoin" value={employee.dateOfJoin} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
                </Box>
                <Box mb={2}>
                    <TextField fullWidth label="Salary" name="salary" type="number" value={employee.salary} onChange={handleChange} required />
                </Box>
                <Box mb={2}>
                    <TextField fullWidth label="Gender" name="gender" value={employee.gender} onChange={handleChange} required />
                </Box>
                <Box mb={2}>
                    <TextField fullWidth label="State" name="state" value={employee.state} onChange={handleChange} required />
                </Box>
                <Box mb={2}>
                    <TextField fullWidth label="Date of Birth" type="date" name="dateOfBirth" value={employee.dateOfBirth} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
                </Box>
                <Button type="submit" variant="contained" color="primary">Add Employee</Button>
            </form>
        </Paper>
    );
};

export default AddEmployee;
