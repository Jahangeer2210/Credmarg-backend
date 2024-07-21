import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import VendorForm from './components/VendorForm';
import EmailForm from './components/EmailForm';
import EmployeeList from './components/EmployeeList';
import VendorList from './components/VendorList';
import EmailList from './components/EmailList';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/employees">Employees</Link>
          </li>
          <li>
            <Link to="/vendors">Vendors</Link>
          </li>
          <li>
            <Link to="/emails">Emails</Link>
          </li>
          <li>
            <Link to="/add-employee">Add Employee</Link>
          </li>
          <li>
            <Link to="/add-vendor">Add Vendor</Link>
          </li>
          <li>
            <Link to="/send-email">Send Email</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/vendors" element={<VendorList />} />
        <Route path="/emails" element={<EmailList />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
        <Route path="/add-vendor" element={<VendorForm />} />
        <Route path="/send-email" element={<EmailForm />} />
      </Routes>
    </Router>
  );
}

export default App;
