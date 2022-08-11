import "./style.css";
import React from "react";
import ContactCard from "./ContactCard";
import StyleD from "../MotionDiv";

import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactPage = ({ foodBankData }) => {
  return (
    <div className="contact">
      <div className="imageDiv">
        <img
          className="bannerImage"
          src="https://i.imgur.com/lzha8jT.jpg"
          alt="container cover, people giving help"
        ></img>
      </div>
      <div className="contact-header-div">
        <h1 className="contact-header">Contact Us</h1>
      </div>
      <StyleD delay={0.1}>
        <ContactCard title={foodBankData ? foodBankData.name : null}>
          <p style={{ "font-style": "italic" }}>
            Your local foodbank. Click here to choose another
          </p>
          <br></br>
          <p>
            <span style={{ "font-weight": "bold" }}>Address:</span>{" "}
            {foodBankData ? foodBankData.address : null}
          </p>
          <p>
            <span style={{ "font-weight": "bold" }}>Phone:</span>{" "}
            {foodBankData ? foodBankData.phone : null}
          </p>
          <p>
            <span style={{ "font-weight": "bold" }}>Email:</span>{" "}
            {foodBankData ? foodBankData.email : null}
          </p>
        </ContactCard>
      </StyleD>
      <StyleD delay={0.2}>
        <ContactCard title="Website Admin">
          <p style={{ "font-style": "italic" }}>
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
                <Form name="contact" data-netlify="true" method="POST">
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">
                        <span style={{ "font-weight": "bold" }}>Name:</span>{" "}
                      </label>
                    </div>
                    <div className="col-75">
                      <Field
                        className="inputs"
                        name="name"
                        placeholder="Name"
                      />
                      <p className="error-message">
                        <ErrorMessage name="name" />
                      </p>
                    </div>
                  </div>
                  <div className="col-25">
                    <label htmlFor="email">
                      <span style={{ "font-weight": "bold" }}>Email:</span>{" "}
                    </label>
                  </div>
                  <div className="col-75">
                    <Field
                      className="inputs"
                      name="email"
                      placeholder="Email"
                    />
                    <p className="error-message">
                      <ErrorMessage name="email" />
                    </p>
                  </div>
                  <div className="col-25">
                    <label htmlFor="message">
                      <span style={{ "font-weight": "bold" }}>Message:</span>{" "}
                    </label>
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
                  <div className="col-100">
                    <button type="submit" className="submit-admin">
                      Send
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </ContactCard>
      </StyleD>
    </div>
  );
};

export default ContactPage;
