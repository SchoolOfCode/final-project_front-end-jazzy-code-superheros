import { Formik, Form, Field, ErrorMessage } from "formik";
// import needsData from "./needsData";
import { useState } from "react";

const FormData = ({ fetchedFoodbankData }) => {
  const [needs, setNeeds] = useState(fetchedFoodbankData.needs);
  const [inputNeed, setInputNeed] = useState(null);
  console.log("needs", needs);

  function handleAdd(e) {
    e.preventDefault();
    console.log("e.target.value :>> ");
    // setNeeds([...needs, e.target.value]);
  }

  function handleDelete(e) {
    e.preventDefault();

    setNeeds(needs.filter((item, index) => index !== Number(e.target.value)));

    // setNeeds(needs.filter((item) => item.id !== Number(e.target.value)));
    console.log("needs", needs);
    console.log("e.target.value :>> ", e.target.value);
  }
  // return (
  //   <Formik
  //      initialValues={{
  //        'owner.fullname': '',
  //      }}
  //      onSubmit={values => {
  //        // same shape as initial values
  //        console.log(values);
  //      }}
  //    >
  //      <Form>
  //        <Field name="['owner.fullname']" />
  //        <button type="submit">Submit</button>
  //      </Form>
  //    </Formik>
  // )

  return (
    <Formik
      // enableReinitialize={true}
      initialValues={{
        name: fetchedFoodbankData.name,
        address: undefined,
        postcode: undefined,
        phone: undefined,
        email: undefined,
        // imgUrl: undefined,
        needs: undefined,
        // distance: undefined,
        // lat_lng: undefined,
      }}
      onSubmit={(values, actions) => {
        console.log("These are the values:", values);
        values.needs = needs;
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        values.needs = "";
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
        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        submitForm,

        /* and other goodies */
      }) => {
        console.log(errors);
        console.log(fetchedFoodbankData);
        return (
          <Form name="needs-form" data-netlify="true" method="POST">
            <div className="row">
              <div className="col-25">
                <label htmlFor="name">Name: </label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="name"
                  placeholder="Name"
                  value={fetchedFoodbankData.name}
                />
                <p className="error-message">
                  <ErrorMessage name="name" />
                </p>
              </div>
            </div>
            <div className="col-25">
              <label htmlFor="address">Address: </label>
            </div>
            <div className="col-75">
              <Field
                className="inputs"
                name="address"
                placeholder="Address"
                value={fetchedFoodbankData.address}
              />
              <p className="error-message">
                <ErrorMessage name="address" />
              </p>
            </div>
            <div className="col-25">
              <label htmlFor="postcode">Post-code </label>
            </div>
            <div className="col-75">
              <Field
                className="inputs"
                name="postcode"
                placeholder="Post-Code"
                value={fetchedFoodbankData.postcode}
              />
              <p className="error-message">
                <ErrorMessage name="postcode" />
              </p>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="phone">Phone </label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="phone"
                  placeholder="Phone"
                  value={fetchedFoodbankData.phone}
                />
                <p className="error-message">
                  <ErrorMessage name="phone" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="email"
                  placeholder="Email"
                  value={fetchedFoodbankData.email}
                />
                <p className="error-message">
                  <ErrorMessage name="email" />
                </p>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-25">
                <label htmlFor="imgurl">Image Url </label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="imgurl"
                  placeholder="Image Url"
                  value={fetchedFoodbankData.imgurl}
                />
                <p className="error-message">
                  <ErrorMessage name="imgurl" />
                </p>
              </div>
            </div> */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="needs">Needs </label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="needs"
                  placeholder="Needs"
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() => {
                    setNeeds([values.needs, ...needs]);
                    values.needs = "";
                  }}
                >
                  +
                </button>
                <p className="error-message">
                  <ErrorMessage name="needs" />
                </p>
              </div>
            </div>
            {needs.map((needsData, index) => {
              return (
                <p key={index}>
                  {needsData}
                  <button value={index} onClick={handleDelete}>
                    -
                  </button>
                </p>
              );
            })}
            {/* 
            <div className="row">
              <div className="col-25">
                <label htmlFor="distance">Distance </label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="distance"
                  placeholder="Distance"
                  value={fetchedFoodbankData.distance_mi}
                />
                <p className="error-message">
                  <ErrorMessage name="distance" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lat_lng">Latitude and Longitude</label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="lat_lng"
                  placeholder="Latitude and Longitude"
                  value={fetchedFoodbankData.lat_lng}
                />
                <p className="error-message">
                  <ErrorMessage name="lat_lng" />
                </p>
              </div>
            </div> */}
            <div className="col-100">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-admin"
                onClick={submitForm}
              >
                Send
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormData;
