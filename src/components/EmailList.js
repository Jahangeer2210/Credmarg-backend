import React, { useState, useEffect } from 'react';
import emailService from '../services/emailService';

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        emailService.getAllEmails().then(response => {
            setEmails(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Emails Sent</h2>
            <ul>
                {emails.map((email, index) => (
                    <li key={index}>{email}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmailList;
