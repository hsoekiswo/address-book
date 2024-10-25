import React, { useContext } from 'react';
import { ViewContext } from './ViewContext';
import './index.css';

function ContactDetail({ contact }) {
    const { setViewMode, viewMode } = useContext(ViewContext);
    const handleEdit = () => {
        setViewMode('edit')
    };

    // Render the contact details
    return (
        <>
            <h1>Contact Detail</h1>
            <h2>Contact Name: {contact.firstName} {contact.lastName}</h2>
            <h3>Email: {contact.email}</h3>
            <h3>Phone: {contact.phone}</h3>
            <h3>Job: {contact.job} at {contact.company}</h3>
            <button onClick={handleEdit}>Edit Contact</button>
            <button>Delete Contact</button>
        </>
    );
}

export default ContactDetail;