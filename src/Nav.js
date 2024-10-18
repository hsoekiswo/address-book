import React, { createContext, useState } from 'react';
import './index.css';
import MainContent from './MainContent';

export const ContactContext = createContext();

function Nav() {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };

    const [contactActive, setContactActive] = useState(true);
    const handleContact = () => {
        setContactActive((prev) => prev = true);
    };
    const handleNewContact = () => {
        setContactActive((prev) => prev = false);
    };

    return (
        <>
            <div className="nav-container">
                <button id="hamburger" className={`hamburger focus:outline-none ${isActive ? 'hidden' : ''}`} onClick={toggleClass}>
                    <div className="hamburger-line line-1"></div>
                    <div className="hamburger-line line-2"></div>
                    <div className="hamburger-line line-3"></div>
                </button>
                <aside id="nav-bar" className={`nav-bar ${isActive ? '' : 'hidden'}`}>
                    <div>
                        <button className="btn-layered" onClick={handleNewContact}>+ Create Contact</button>
                    </div>
                    <div id="contact" className="aside-list" onClick={handleContact}>
                        Contacts
                    </div>
                    <div className="aside-list">
                        Merge and fix
                    </div>
                    <div className="aside-list">
                        Import
                    </div>
                </aside>
                <div id="close-nav" className={`close-nav ${isActive ? '' : 'hidden'}`}>
                    <button className="btn-close-nav" onClick={toggleClass}> ◀️ </button>
                </div>
            </div>
            <ContactContext.Provider value={contactActive}>
                <MainContent/>
            </ContactContext.Provider>
        </>
    );
}

export default Nav;