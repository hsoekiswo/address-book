import React, { useState, useEffect } from 'react';
import './index.css';

function ContactList() {
    const [contact, setContact] = useState([]);

    useEffect(() => {
        const contactValue = JSON.parse(localStorage.getItem('contact')) || [];
        setContact(contactValue);
    }, [])

    return (
        <>
            <h1>
                Contacts ({contact.length})
            </h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th>Job title and company</th>
                </thead>
                <tbody id="tableContent">

                    {contact.map((item, i) => (
                        <tr key={i}>
                            <td>{item.firstName + ' ' + item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.job + ' at ' + item.company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ContactList;