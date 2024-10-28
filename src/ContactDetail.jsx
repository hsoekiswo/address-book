import React, { useContext } from 'react';
import { ViewContext } from './ViewContext';
import './index.css';

function ContactDetail({ contact }) {
    const { setViewMode, viewMode } = useContext(ViewContext);
    const handleEdit = () => {
        setViewMode('edit')
    };
    const handleDelete = () => {
        const buttonDelete = document.getElementById('btn-delete');
        buttonDelete.classList.remove('hidden')
    };
    const deleteContact = () => {
        const allContact = JSON.parse(localStorage.getItem('contact'));
        const idToDelete = contact.id;
        const updatedContacts = allContact.filter(item => String(item.id) !== String(idToDelete));

        localStorage.setItem('contact', JSON.stringify(updatedContacts));
        alert(`Successfully deleting ${contact.firstName} ${contact.lastName}'s contact`);
        setViewMode('list');
    }

    // Render the contact details
    return (
        <>
            <h1>Contact Detail</h1>
            <h2>Contact Name: {contact.firstName} {contact.lastName}</h2>
            <h3>Email: {contact.email}</h3>
            <h3>Phone: {contact.phone}</h3>
            <h3>Job: {contact.job} at {contact.company}</h3>
            <button onClick={handleEdit}>Edit Contact</button>
            <button onClick={handleDelete}>Delete Contact</button>
            <div id="btn-delete" className="hidden">
                <h1>Delete {contact.firstName} {contact.lastName} from Contacts?</h1>
                <p>This contact will be permanently deleted</p>
                <button>Cancel</button>
                <button onClick={deleteContact}>Delete</button>
            </div>
        </>
    );
}

export default ContactDetail;