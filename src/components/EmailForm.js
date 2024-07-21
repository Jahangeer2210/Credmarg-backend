import React, { useState } from 'react';
import emailService from '../services/emailService';

const EmailForm = () => {
    const [email, setEmail] = useState({
        recipient: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail((prevEmail) => ({
            ...prevEmail,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailService.sendEmail(email)
            .then(response => {
                console.log('Email sent:', response.data);
            })
            .catch(error => {
                console.error('There was an error sending the email!', error);
            });
    };

    return (
        <div className="container">
            <h2>Send Email</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="recipient"
                    placeholder="Recipient Email"
                    value={email.recipient}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={email.message}
                    onChange={handleChange}
                />
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
};

export default EmailForm;
