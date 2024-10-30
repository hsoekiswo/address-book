import React from "react";
import { ViewContext } from "./ViewContext";
import './index.css';

function MergeContact() {
    const contacts = JSON.parse(localStorage.getItem('contact'))

    return (
        <>
            <h1>This is merge contact page</h1>
            <p>{JSON.stringify(contacts)}</p>
        </>
    )
}

export default MergeContact;