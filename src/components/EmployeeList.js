import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        employeeService.getAllEmployees().then(response => {
            setEmployees(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Employees</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.designation} - {employee.ctc} - {employee.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
