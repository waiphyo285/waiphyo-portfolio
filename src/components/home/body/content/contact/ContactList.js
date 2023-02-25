import React from "react";

function ContactListComponent({ contacts }) {
  return (
    <ul className="list-group">
      {contacts.map((contact, contIdx) => (
        <div key={contIdx}>
          <li className={`p-3`} style={{ listStyle: "none" }}>
            <i className={contact.icon} aria-hidden="true" />
            <a className="mx-3" href={contact["href"]}>
              {contact["show-text"]}
            </a>
          </li>
          {contacts.length - 1 !== contIdx && <hr className="m-0" />}
        </div>
      ))}
    </ul>
  );
}

export default ContactListComponent;
