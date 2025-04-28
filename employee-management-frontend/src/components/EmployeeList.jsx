import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Paper, Typography, Button, Box, Grid } from '@mui/material';

const EmployeeList = ({ selectEmployee, refreshToggle }) => {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, [refreshToggle]);

    const fetchEmployees = async () => {
        try {
            const response = await api.getEmployees();
            setEmployeeList(response.data);
        } catch (error) {
            console.error('Failed to fetch employees:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.deleteEmployee(id);
            fetchEmployees();
        } catch (error) {
            console.error('Failed to delete employee:', error);
        }
    };

    return (
        <Box mt={4}>
            <Typography variant="h5" gutterBottom>
                Employee List
            </Typography>
            <Grid container spacing={2}>
                {employeeList.map((employee) => (
                    <Grid item xs={12} key={employee.id}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6">{employee.name}</Typography>
                            <Typography>Email: {employee.email}</Typography>
                            <Typography>Designation: {employee.designation}</Typography>
                            <Box mt={1}>
                                <Button variant="outlined" onClick={() => selectEmployee(employee)} sx={{ mr: 1 }}>
                                    Edit
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => handleDelete(employee.id)}>
                                    Delete
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default EmployeeList;
