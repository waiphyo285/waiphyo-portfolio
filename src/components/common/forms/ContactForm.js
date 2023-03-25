import React from "react";
import { Formik } from "formik";
import { validationSchema } from "../../../validations/contact.schema";

// utils function
import showSnackBar from "../../../utils/show-snackbar";

function ContactFormComponent() {
  const submitForm = (formData) => {
    const { name, email, message } = formData;
    Email.send({
      To: "",
      From: "",
      SecureToken: "",
      Subject: `${name} <${email}>`,
      Body: `${message}`,
    }).then((message) => {
      if (message === "OK") {
        showSnackBar(
          "I've received your message, I'll get back soon!",
          "success"
        );
      } else {
        showSnackBar(
          "Oops! your message can't send, please try again!",
          "warning"
        );
      }
    });
  };

  return (
    <div className="shadow-sm">
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="p-2" onSubmit={handleSubmit}>
            <div className="form-group m-2 mb-3">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                name="name"
                id="nameInput"
                value={values.name}
                onChange={handleChange}
                className="form-control"
                placeholder="John Doe"
                autoComplete="off"
              />
              <span className="text-danger">
                {errors.name && touched.name && errors.name}
              </span>
            </div>
            <div className="form-group m-2 mb-3">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                id="emailInput"
                value={values.email}
                onChange={handleChange}
                className="form-control"
                placeholder="john@doe.io"
                autoComplete="off"
              />
              <span className="text-danger">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <div className="form-group m-2 mb-3">
              <label htmlFor="message">Message *</label>
              <textarea
                value={values.message}
                onChange={handleChange}
                placeholder={"Lorem ipsum is ..."}
                className="form-control"
                id="messageInput"
                name="message"
                rows="3"
              ></textarea>
              <span className="text-danger">
                {errors.message && touched.message && errors.message}
              </span>
            </div>
            <div className="form-group m-2 my-4">
              <hr />
            </div>
            <div className="form-group pb-2 text-center">
              <button type="submit" className="btn submit-btn w-50">
                <i className="bi-send" /> Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ContactFormComponent;
