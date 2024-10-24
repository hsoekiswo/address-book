import React, { useState, useEffect, useContext } from 'react';
import { ViewContext } from './ViewContext';
import './index.css';

function ContactList({ setSelectedContact }) {
    const { setViewMode, viewMode } = useContext(ViewContext);
    const [contact, setContact] = useState([]);

    // Fetch contacts from localStorage
    useEffect(() => {
        const contactValue = JSON.parse(localStorage.getItem('contact')) || [];
        setContact(contactValue);
    }, []);

    // Handle view detail on contact click
    const handleViewDetail = (contact) => {
        setSelectedContact(contact);
        setViewMode('detail');  // Switch to detail view
    };

    return (
        <>
            {viewMode === 'list' && (
                <>
                    <h1>Contacts ({contact.length})</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Job title and company</th>
                            </tr>
                        </thead>
                        <tbody id="tableContent">
                            {contact.map((item, i) => (
                                <tr key={i} onClick={() => handleViewDetail(item)}>
                                    <td>{item.firstName} {item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.job} at {item.company}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
}

export default ContactList;