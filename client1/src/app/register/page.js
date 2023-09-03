"use client"
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.number()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'), 
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confimPassword: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  gender: Yup.string().required(),
});

 const Register = () => (
  <div class="register-form">
    <h1>Register</h1>
    <Formik
      initialValues={{
        fullname: '',
        email: '',
        phone: '',
        password: '',
        confimPassword: '',
        city: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
     
      {({ errors, touched }) => (
        <Form>
          <Field placeholder="fullname" name="fullname" />
          {errors.fullname && touched.fullname ? (
            <div>{errors.fullname}</div>
          ) : null}<br/>
          <Field placeholder="email" name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}<br/>
          <Field placeholder="phone" name="phone" type="phone" />
          {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}<br/>
          <Field placeholder="city" name="city" type="city" />
          {errors.city && touched.city ? <div>{errors.city}</div> : null}<br/>
          <Field placeholder="password" name="password" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}<br/>
          <Field placeholder="confimPassword" name="confimPassword" type="confimPassword" />
          {errors.confimPassword && touched.confimPassword ? <div>{errors.confimPassword}</div> : null}<br/>
          
        
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Register