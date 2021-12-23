import React from "react";
import Layout from "../component/layout";
import { Formik } from "formik";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>This is Home page in Netlify</h1>
        <Formik
          initialValues={{ message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.message) {
              errors.message = "Required";
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
            fetch(`/.netlify/functions/hello`, {
              method: 'post',
              body: JSON.stringify(values),
            }) 
              .then(response => response.json())
              .then(data => {
                console.log(data)
              });
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && errors.message}

              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
