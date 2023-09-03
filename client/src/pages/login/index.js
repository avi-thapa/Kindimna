"use client"
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from "../../styles/register.module.css"
import { useToast } from '@chakra-ui/react'

const SigninSchema = Yup.object().shape({
  

  phone: Yup.number()
  .min(2, 'Too Short!')
  
  .required('Required'), 
  
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  
});

 const Login = () => { 
  const toast = useToast()
  const handlelogin = async(values)=>{
  const res = await  fetch('http://localhost:3005/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const data = await res.json()
   
    toast({
      title: data.msg,
      status: res.status==401 ? 'warning': 'success',
      isClosable: true,
    })
   }
  return(
  <div className="register-form">
    <h1>Login</h1>
    <Formik
      initialValues={{
    
        phone: '',
        password: '',
      
      }}
      validationSchema={SigninSchema}
      onSubmit={(values, {resetForm}) => {
        handlelogin(values)
        resetForm()
      }}
    >
     
      {({ errors, touched }) => (
        <Form>
         
          
          <Field placeholder="phone" name="phone" type="phone" />
          {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}<br/>

          <Field placeholder="password" name="password" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}<br/>
  
          
        
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  </div>
)}
export default Login