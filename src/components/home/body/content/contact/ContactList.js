import React from "react";

function ContactListComponent({ contacts }) {
    return (
        <ul className="list-group">
            {
                contacts.map((contact, contIdx) => (
                    <li key={contIdx} className="list-group-item">
                        <i className={contact.icon} aria-hidden="true" />
                        <a className="mx-3" href={contact["href"]}>
                            {contact["show-text"]}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}

export default ContactListComponent;