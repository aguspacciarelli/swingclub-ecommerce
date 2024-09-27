'use client'

import React from 'react'
import { Formik, Field, Form } from 'formik';

const Formm = () => {
  return (
    <div>
    form
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="jane@acme.com" type="email" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik></div>
  )
}

export default Formm