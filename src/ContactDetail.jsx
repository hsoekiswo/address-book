import React, { useContext } from 'react';
import { ViewContext } from './ViewContext';
import './index.css';
import editIcon from './assets/icons/pencil.svg';
import deleteIcon from './assets/icons/trash3.svg';
import arrowIcon from './assets/icons/arrow-left.svg';

function ContactDetail({ contact }) {
    const { setViewMode, viewMode } = useContext(ViewContext);
    const handleEdit = () => {
        setViewMode('edit')
    };
    const handleDelete = () => {
        const buttonDelete = document.getElementById('div-delete');
        buttonDelete.classList.remove('hidden')
    };
    const deleteContact = () => {
        const allContact = JSON.parse(localStorage.getItem('contact'));
        const idToDelete = contact.id;
        const updatedContacts = allContact.filter(item => String(item.id) !== String(idToDelete));

        localStorage.setItem('contact', JSON.stringify(updatedContacts));
        alert(`Successfully deleting ${contact.firstName} ${contact.lastName}'s contact`);
        setViewMode('list');
    };
    const handleCancel = () => {
        const buttonDelete = document.getElementById('div-delete');
        if (buttonDelete) {
            buttonDelete.classList.add('hidden')
        }
    }

    // Render the contact details
    return (
        <>
            <div className='action-detail'>
                <div className='btn-icon-container'>
                    <button onClick={() => {setViewMode((prev) => prev = 'list')}}>
                        <img className='btn-icon' src={arrowIcon}/>
                    </button>
                </div>
                <div className='btn-icon-container'>
                    <button onClick={handleEdit}>
                        <img className='btn-icon' src={editIcon} />
                    </button>
                </div>
                <div className='btn-icon-container'>
                    <button onClick={handleDelete}>
                        <img className='btn-icon' src={deleteIcon} />
                    </button>
                </div>
            </div>
            <div className='detail-container'>
                <h1>Contact Detail</h1>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <h3>Email</h3>
                <h3>{contact.email}</h3>
                <h3>Phone</h3>
                <h3>{contact.phone}</h3>
                <h3>Job</h3>
                <h3>{contact.job} at {contact.company}</h3>
            </div>
            <div id="div-delete" className="hidden">
                <div className="delete-container">
                    <h2 className='text-red-500'>Delete {contact.firstName} {contact.lastName} from Contacts?</h2>
                    <p>This contact will be permanently deleted</p>
                    <div className='delete-btn-container'>
                        <button className='btn-layered btn-cancel' onClick={handleCancel}>Cancel</button>
                        <button className='btn-layered btn-delete' onClick={deleteContact}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactDetail;