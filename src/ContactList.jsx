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

    const generateContact = () => {
        const contactList = [
            {   
                'id': 0,
                'firstName': 'Luka',
                'lastName': 'Modric',
                'company': 'Real Madrid',
                'job': 'Midfielder',
                'email': 'modric@real.com',
                'phone': '101010',
                'dateBirth': '9',
                'monthBirth': 'September',
                'yearBirth': '1985'
            },
            {
                'id': 1,
                'firstName': 'Lamine',
                'lastName': 'Yamal',
                'company': 'Barcelona',
                'job': 'Forward',
                'email': 'yamal@barcelona.com',
                'phone': '191919',
                'dateBirth': '13',
                'monthBirth': 'July',
                'yearBirth': '2007'
            },
            {
                'id': 2,
                'firstName': 'Erling',
                'lastName': 'Halaand',
                'company': 'Manchester City',
                'job': 'Forward',
                'email': 'halaand@city.com',
                'phone': '090909',
                'dateBirth': '21',
                'monthBirth': 'July',
                'yearBirth': '2000'
            },
        ]
        localStorage.setItem('contact', JSON.stringify(contactList));
    }

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
                    <button onClick={generateContact}>generate contact</button>
                </>
            )}
        </>
    );
}

export default ContactList;