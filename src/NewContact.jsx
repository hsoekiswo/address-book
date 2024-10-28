import React, { useState, createContext, useContext } from 'react';
import { ViewContext } from './ViewContext';

export const NewContactContext = createContext();

function NewContact() {
    const { setViewMode, viewMode } = useContext(ViewContext);

    const [newContact, setNewContact] = useState({
            id: 0,
            firstName: '',
            lastName: '',
            company: '',
            job: '',
            email: '',
            phone: '',
            dateBirth: '',
            monthBirth: '',
            yearBirth: ''
        });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewContact(prevContact => ({
            ...prevContact,
            [name]: value,
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let allContact = JSON.parse(localStorage.getItem('contact')) || [];

        // Set a new ID based on the last contact's ID, or set to 0 if no contacts exist
        const newId = allContact.length > 0 ? allContact[allContact.length - 1].id + 1 : 0;

        // Update newContact with the correct ID
        const contactWithId = {
            ...newContact,
            id: newId,
        };

        // Add the new contact to the array and save to local storage
        allContact.push(contactWithId);
        localStorage.setItem('contact', JSON.stringify(allContact));

        // Notify the user and switch the view mode
        alert('Successfully input new contact');
        setViewMode('list');
    };

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold mt-6 mb-8 px-3 text-blue-500">
                    Create New Contact
                </h1>
            </div>
            <form id="new-contact" className="flex flex-col px-12">
                <input type="text" name="firstName" id="firstName" placeholder="First Name" value={newContact.firstName} onChange={handleChange} />
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={newContact.lastName} onChange={handleChange} />
                <input type="text" name="company" id="company" placeholder="Company" value={newContact.company} onChange={handleChange} />
                <input type="text" name="job" id="job" placeholder="Job Title" value={newContact.job} onChange={handleChange} />
                <input type="text" name="email" id="email" placeholder="Email" value={newContact.email} onChange={handleChange} />
                <input type="text" name="phone" id="phone" placeholder="Phone" value={newContact.phone} onChange={handleChange} />
                <label htmlFor="birthday">Birthday</label>
                <input type="text" name="dateBirth" id="dateBirth" placeholder="Date" value={newContact.dateBirth} onChange={handleChange} />
                <select name="monthBirth" id="monthBirth" value={newContact.monthBirth} onChange={handleChange} >
                    <option value="" disabled>Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>
                <input type="text" name="yearBirth" id="yearBirth" placeholder="Year" value={newContact.yearBirth} onChange={handleChange} />
                <button className="btn-layered btn-submit" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default NewContact;