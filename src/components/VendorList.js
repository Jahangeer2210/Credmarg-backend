import React, { useState, useEffect } from 'react';
import vendorService from '../services/vendorService';

const VendorList = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        vendorService.getAllVendors().then(response => {
            setVendors(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Vendors</h2>
            <ul>
                {vendors.map(vendor => (
                    <li key={vendor.id}>{vendor.name} - {vendor.email} - {vendor.upi}</li>
                ))}
            </ul>
        </div>
    );
};

export default VendorList;
