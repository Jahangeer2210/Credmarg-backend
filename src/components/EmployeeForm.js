import React, { useState } from 'react';
import employeeService from '../services/employeeService';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: '',
        designation: '',
        ctc: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        employeeService.createEmployee(employee)
            .then(response => {
                console.log('Employee created:', response.data);
            })
            .catch(error => {
                console.error('There was an error creating the employee!', error);
            });
    };

    return (
        <div className="container">
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Name"
                    value={employee.name}
                    onChange={handleChange}
                />
                <input
                    name="designation"
                    placeholder="Designation"
                    value={employee.designation}
                    onChange={handleChange}
                />
                <input
                    name="ctc"
                    placeholder="CTC"
                    value={employee.ctc}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    placeholder="Email"
                    value={employee.email}
                    onChange={handleChange}
                />
                <button type="submit">Create Employee</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
