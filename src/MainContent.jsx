import React, { useContext, useState } from 'react';
import { ViewContext } from './ViewContext';
import ContactList from './ContactList';
import NewContact from './NewContact';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';
import MergeContact from './MergeContact';
import './index.css';

function MainContent() {
    const { viewMode } = useContext(ViewContext);
    const [selectedContact, setSelectedContact] = useState(null);  // Track selected contact

    return (
        <main id="contact" className="main-content">
            {viewMode === 'list' && <ContactList setSelectedContact={setSelectedContact} />}  {/* Pass setSelectedContact */}
            {viewMode === 'new' && <NewContact />}
            {viewMode === 'detail' && selectedContact && <ContactDetail contact={selectedContact} />}  {/* Pass selectedContact */}
            {viewMode === 'edit' && selectedContact && <EditContact selectedContact={selectedContact} />}
            {viewMode === 'merge' && <MergeContact />}
        </main>
    );
}

export default MainContent;