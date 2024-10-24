import React from 'react';
import './index.css';

function ContactDetail({ contact }) {
    // Render the contact details
    return (
        <>
            <h1>Contact Detail</h1>
            <h2>Contact Name: {contact.firstName} {contact.lastName}</h2>
            <h3>Email: {contact.email}</h3>
            <h3>Phone: {contact.phone}</h3>
            <h3>Job: {contact.job} at {contact.company}</h3>
            <button>Edit Contact</button>
            <button>Delete Contact</button>
        </>
    );
}

export default ContactDetail;