import React, { useContext, useState } from 'react';
import { ViewContext } from './ViewContext';
import './index.css';

function Nav() {
    const { setViewMode } = useContext(ViewContext)

    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
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
                        <button className="btn-layered" onClick={() => {setViewMode((prev) => prev = 'new')}}>+ Create Contact</button>
                    </div>
                    <div id="contact" className="aside-list" onClick={() => {setViewMode((prev) => prev = 'list')}}>
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
        </>
    );
}

export default Nav;