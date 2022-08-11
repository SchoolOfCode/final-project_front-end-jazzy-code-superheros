import { Formik, Form, Field, ErrorMessage } from "formik";
// import needsData from "./needsData";
import { useState } from "react";
import Button from "../AdminButton/index.js";
const FormData = ({ fetchedFoodbankData, foodbankId }) => {
  const [needs, setNeeds] = useState(fetchedFoodbankData.needs);
  console.log("needs", needs);

  function handleDelete(e) {
    e.preventDefault();

    setNeeds(needs.filter((item, index) => index !== Number(e.target.value)));
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

  const postSubmission = async (formBody) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formBody,
    };
    const rootUrl = `https://yourlocalfoodbank.herokuapp.com/foodbank`;
    let res = await fetch(rootUrl, requestOptions);
    let data = await res.json();
    console.log("data :>> ", data);
  };

  const patchSubmission = async (formBody) => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: formBody,
    };

    const rootUrl = `https://yourlocalfoodbank.herokuapp.com/foodbank/${foodbankId}`;
    let res = await fetch(rootUrl, requestOptions);
    let data = await res.json();
    console.log("data :>> ", data);
  };

  const getModifiedValues = (values, initialValues) => {
    let modifiedValues = {};

    if (values) {
      Object.entries(values).forEach((entry) => {
        let key = entry[0];
        let value = entry[1];

        if (value !== initialValues[key]) {
          modifiedValues[key] = value;
        }
      });
    }

    return modifiedValues;
  };

  let initialValues = {
    name: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
    // imgUrl: undefined,
    needs: "",
    // distance: undefined,
    // lat_lng: undefined,
  };

  return (
    <Formik
      // enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        values.needs = needs;
        console.log("these are the formik needs", values.needs);
        console.log("These are the values:", values);
        let modifiedVals = getModifiedValues(values, initialValues);
        console.log("modded", modifiedVals);
        alert(JSON.stringify(modifiedVals, null, 2));

        patchSubmission(JSON.stringify(modifiedVals, null, 2));
        // postSubmission(JSON.stringify(modifiedVals, null, 2));
        actions.setSubmitting(false);
        values.needs = [];
      }}
      validate={(values) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        // if (!values.name) {
        //   errors.name = "Name Required";
        // }
        // if (!values.email || !emailRegex.test(values.email)) {
        //   errors.email = "Valid Email Required";
        // }
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
        {
          /* console.log(fetchedFoodbankData); */
        }
        return (
          <Form
            name="needs-form"
            data-netlify="true"
            method="POST"
            className="admin-form"
          >
            <div className="row">
              <div className="col-25">
                <label htmlFor="name">Name: </label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="name"
                  placeholder="Name"
                  // value={fetchedFoodbankData.name}
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
                // value={fetchedFoodbankData.address}
              />
              <p className="error-message">
                <ErrorMessage name="address" />
              </p>
            </div>
            <div className="col-25">
              <label htmlFor="postcode">Postcode: </label>
            </div>
            <div className="col-75">
              <Field
                className="inputs"
                name="postcode"
                placeholder="Postcode"
                // value={fetchedFoodbankData.postcode}
              />
              <p className="error-message">
                <ErrorMessage name="postcode" />
              </p>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="phone">Phone: </label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="phone"
                  placeholder="Phone"
                  // value={fetchedFoodbankData.phone}
                />
                <p className="error-message">
                  <ErrorMessage name="phone" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email: </label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="email"
                  placeholder="Email"
                  // value={fetchedFoodbankData.email}
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
                <label htmlFor="needs">Needs: </label>
              </div>
              <div className="col-75">
                <Field
                  className="inputs"
                  name="needs"
                  placeholder="Needs"
                  onChange={handleChange}
                />

                <Button
                  type="button"
                  onClick={() => {
                    setNeeds([values.needs, ...needs]);
                    values.needs = "";
                  }}
                >
                  +
                </Button>
                <p className="error-message">
                  <ErrorMessage name="needs" />
                </p>
              </div>
            </div>
            <div className="needs-container">
              {needs.map((needsData, index) => {
                return (
                  <p key={index} className="needs-item">
                    {needsData}
                    <Button value={index} onClick={handleDelete}>
                      -
                    </Button>
                  </p>
                );
              })}
            </div>
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
                type="button"
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
