import React from "react";

// utils function
import showSnackBar from "../../../utils/show-snackbar";

function ContactFormComponent() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        Email.send({
            SecureToken: "0BD9F554-7602-4D27-8D77-26145502C19D",
            To: 'waiphyoenaing.joy007@gmail.com',
            From: "waiphyo.dev@gmail.com",
            Subject: `${name} <${email}>`,
            Body: `${message}`
        }).then((message) => {
            if (message === "OK") {
                showSnackBar("I've received your message, I'll get back soon!", "success")
            }
            else {
                showSnackBar("Oops! your message can't send, please try again!", "warning")
            }
        });
    };

    return (
        <div className="shadow-sm">
            <form className="p-2" onSubmit={handleSubmit} method="post">
                <div className="form-group m-2 mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="nameInput"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className="form-group m-2 mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="emailInput"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="john@doe.io"
                        required
                    />
                </div>
                <div className="form-group m-2 mb-3">
                    <label htmlFor="message">Message</label>
                    <textarea
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={"Lorem ipsum is ..."}
                        className="form-control"
                        id="messageInput"
                        name="message"
                        rows="3"
                        required
                    ></textarea>
                </div>
                <div className="form-group m-2 pb-2">
                    <hr />
                    <button type="submit" className="btn gradient-btn form-control">
                        <i className="bi-send" /> Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactFormComponent;
