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
        location.reload();
    }

    function getRandomEmoji() {
        const min = 0x1F600;
        const max = 0x1F64F;
        
        const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
        return String.fromCodePoint(randomCode);
    }

    return (
        <>
            {viewMode === 'list' && contact.length > 0 && (
                <div className='main-container'>
                    <div className='header-container'>
                        <h1>Contacts ({contact.length})</h1>
                    </div>
                    <div className='list-container'>
                        <ul>
                            {contact.map((item, i) => (
                                <li className='list-contact' key={i} onClick={() => handleViewDetail(item)}>
                                    <div className='contact-emoji'>
                                        <p>{getRandomEmoji()}</p>
                                    </div>
                                    <div className='contact-name'>
                                        <p>{item.firstName} {item.lastName}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {viewMode === 'list' && contact.length === 0 && (
                <div className='main-container'>
                    <div className='header-container'>
                        <h1 className='text-red-700'>No Contact Found</h1>
                        <p>If you want to explore quickly, you can click <code className='bg-slate-100 rounded-lg'>Generate Contact</code> button.</p>
                        <p>Dummy contacts will be created!</p>
                    </div>
                    <div className='header-container'>
                        <button className='btn-layered mt-6 ml-3 cursor-pointer' onClick={generateContact} >Generate Contact</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactList;