import React, { useEffect } from "react";
import AppContext from "../../context/AppContext";

const MessageButtonComponent = () => {
    const { showTopBtn, showSocial, setShowSocial } = React.useContext(AppContext);

    return (
        <>
            <button
                href="#contact"
                onClick={() => { setShowSocial(!showSocial) }}
                className="btn gradient-btn toggle-social-btn"
                style={showTopBtn ? { "bottom": "4.4rem" } : null}
            >
                <i className={showSocial ? "bi-x" : "bi-chat-text"}></i>
            </button>
        </>
    );
};

export default MessageButtonComponent;
