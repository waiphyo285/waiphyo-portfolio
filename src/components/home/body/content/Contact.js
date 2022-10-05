import React from "react";

// contact components
import ContactList from "./contact/ContactList";

// common components
import ContactForm from "../../../common/forms/ContactForm";
import GoogleMap from "../../../common/others/GoogleMap";

function ContactContentComponent({ contents }) {
    return (
        contents
            ? <div
                className="tab-pane fade pt-4"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
            >
                <div className="row shadow-sm px-3 py-4">
                    <h3 className="h3">{contents.title}</h3>
                    <div className="col-md-6">
                        <ContactList contacts={contents.contacts} />
                        <GoogleMap src="https://maps.google.com/maps?width=600&amp;height=220&amp;hl=en&amp;q=Mayangon&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                    </div>
                    <div className="col-md-6 mt-5 mt-sm-0">
                        <ContactForm />
                    </div>
                </div>
            </div>
            : <></>
    );
}

export default ContactContentComponent;