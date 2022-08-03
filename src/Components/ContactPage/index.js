import "./style.css";
import React from "react";
import ContactCard from "./ContactCard";

import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactPage = ({ foodBankData }) => {
  return (
    <div className="contact">
      <h1 className="page-header">Contact Us</h1>
      <div className="imageDiv">
        <img
          className="bannerImage"
          src="https://i.imgur.com/lzha8jT.jpg"
          alt="container cover, people giving help"
        ></img>
      </div>
      <ContactCard title={foodBankData ? foodBankData.name : null}>
        <p>Address: {foodBankData ? foodBankData.address : null}</p>
        <p>Phone: {foodBankData ? foodBankData.phone : null}</p>
        <p>Email: {foodBankData ? foodBankData.email : null}</p>
      </ContactCard>
      <ContactCard title="Website Admin">
        <p>
          To get in touch with the website administrators, please fill in and
          submit the form below:
        </p>
        <div className="admin-wrapper">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
            validate={(values) => {
              const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
              const errors = {};
              if (!values.name) {
                errors.name = "Name Required";
              }
              if (!values.email || !emailRegex.test(values.email)) {
                errors.email = "Valid Email Required";
              }
              if (!values.message) {
                errors.message = "Message Required";
              }
              return errors;
            }}
          >
            {() => (
              <Form>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">Name: </label>
                  </div>
                  <div className="col-75">
                    <Field className="inputs" name="name" placeholder="Name" />
                    <p className="error-message">
                      <ErrorMessage name="name" />
                    </p>
                  </div>
                </div>
                <div className="col-25">
                  <label htmlFor="email">Email: </label>
                </div>
                <div className="col-75">
                  <Field className="inputs" name="email" placeholder="Email" />
                  <p className="error-message">
                    <ErrorMessage name="email" />
                  </p>
                </div>
                <div className="col-25">
                  <label htmlFor="message">Message: </label>
                </div>
                <div className="col-75">
                  <Field
                    name="message"
                    component="textarea"
                    placeholder="Message"
                  />
                  <p className="error-message">
                    <ErrorMessage name="message" />
                  </p>
                </div>

                <button type="submit" className="submit-admin">
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </ContactCard>
    </div>
  );
};

export default ContactPage;
