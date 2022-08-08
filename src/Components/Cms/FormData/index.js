import { Formik, Form, Field, ErrorMessage } from "formik";

const FormData = () => {
  return (
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
            <Field name="message" component="textarea" placeholder="Message" />
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
  );
};

export default FormData;
