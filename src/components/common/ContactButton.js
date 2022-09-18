import React from "react";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";

// Context
import AppContext from "../../context/AppContext";

// Component
import MessageButton from "./MessageButton";

const styles = {
  fadeIn: {
    animation: "x 5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

function ContactButtonComponent({ contacts }) {
  const { showTopBtn, showSocial } = React.useContext(AppContext);

  return (
    <>
      <MessageButton />
      {
        showSocial && <StyleRoot>
          <div
            role="group"
            className="btn-group-vertical social-btn"
            style={{ ...styles.fadeIn, "bottom": showTopBtn ? "7.4rem" : "4.4rem" }}
          >
            {contacts.map((contact, contIdx) => (
              <a
                key={contIdx}
                href={contact.href}
                className="btn gradient-btn my-1"
                style={{ backgroundColor: contact.color }}
              >
                <i className={contact.icon}></i>
              </a>
            ))}
          </div>
        </StyleRoot>
      }
    </>
  );
}

export default ContactButtonComponent;
