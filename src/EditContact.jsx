import React, { useState, useContext } from "react";
import { ViewContext } from './ViewContext';
import arrowIcon from './assets/icons/arrow-left.svg';
import './index.css';

function EditContact({ selectedContact }) {
    const { setViewMode, viewMode } = useContext(ViewContext);
    const [contact, setContact] = useState(() => selectedContact);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setContact((prevContact => ({
            ...prevContact,
            [name]: value,
        })))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const allContact = JSON.parse(localStorage.getItem('contact'));
        const idToReplace = contact.id;
        const newData = contact;
        const updatedContacts = allContact.map(item => 
            item.id === idToReplace ? newData : item
        )
        localStorage.setItem('contact', JSON.stringify(updatedContacts));

        alert(`Successfully editing ${contact.firstName} ${contact.lastName}'s contact`);

        setViewMode('list');
    }

    return (
        <div>  
            <div className='actions-container'>
                <div className='btn-icon-container'>
                    <button className='btn-icon' onClick={() => {setViewMode((prev) => prev = 'list')}}>
                        <img className='btn-icon-img' src={arrowIcon}/>
                    </button>
                </div>
            </div>
            <div className='header-container'>
                <h1>Edit Contact</h1>
            </div>
            <div className="form-container">
                <form>
                    <label>First Name</label>
                    <input type='text' name="firstName" id="firstNameEdit" placeholder={contact.firstName} value={contact.firstName} onChange={handleChange} ></input>
                    <label>Last Name</label>
                    <input type='text' name="lasttName" id="lastNameEdit" placeholder={contact.lastName} value={contact.lastName} onChange={handleChange}></input>
                    <label>Company</label>
                    <input type='text' name="company" id="companyEdit" placeholder={contact.company} value={contact.company} onChange={handleChange} ></input>
                    <label>Job</label>
                    <input type='text' name="job" id="jobEdit" placeholder={contact.job} value={contact.job} onChange={handleChange} ></input>
                    <label>Email</label>
                    <input type='text' name="email" id="emailEdit" placeholder={contact.email} value={contact.email} onChange={handleChange} ></input>
                    <label>Phone</label>
                    <input type='text' name="phone" id="phoneEdit" placeholder={contact.phone} value={contact.phone} onChange={handleChange} ></input>
                    <label>Birthday</label>
                    <label>Day</label>
                    <input type='text' name="dateBirth" id="dateBirthEdit" placeholder={contact.dateBirth} value={contact.dateBirth} onChange={handleChange} ></input>
                    <select name="monthBirth" id="monthBirthEdit" value={contact.monthBirth} onChange={handleChange} >
                        <option disabled>{contact.monthBirth}</option>
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
                    <label>Year</label>
                    <input type='text' name="yearBirth" id="yearBirthEdit" placeholder={contact.yearBirth} value={contact.yearBirth} onChange={handleChange} ></input>
                    <button className="btn-layered btn-submit" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default EditContact;