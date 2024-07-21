import React, { useState } from 'react';
import vendorService from '../services/vendorService';

const VendorForm = () => {
    const [vendor, setVendor] = useState({
        name: '',
        email: '',
        upi: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendor((prevVendor) => ({
            ...prevVendor,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        vendorService.createVendor(vendor).then(response => {
            console.log('Vendor created:', response.data);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={vendor.name} onChange={handleChange} />
            <input name="email" placeholder="Email" value={vendor.email} onChange={handleChange} />
            <input name="upi" placeholder="UPI" value={vendor.upi} onChange={handleChange} />
            <button type="submit">Create Vendor</button>
        </form>
    );
};

export default VendorForm;
