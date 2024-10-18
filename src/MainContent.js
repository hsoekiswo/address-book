import React, { useContext } from 'react';
import { ContactContext } from './Nav';
import ContactList from './ContactList';
import NewContact from './NewContact';
import './index.css';

function MainContent({}) {
    const contactActive = useContext(ContactContext);

    return (
        <main id="contact">
            <div>
                {(contactActive) ? <ContactList /> : <NewContact />}
            </div>
        </main>
    )
}

export default MainContent;