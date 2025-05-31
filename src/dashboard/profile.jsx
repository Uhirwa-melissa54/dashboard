import React from 'react'
import { Formik } from 'formik'
import { Box,TextField } from '@mui/material'
import * as yup from 'yup';
import Header from './header';


function Profile() {
    const handleFormSubmit=(values) =>{
        console.log(values)
    }

   const initialValues={
    firstName:'',
    lastName:'',
    email:'',
    contact:'',
    address1:'',
    address2:''
   } 
const profileSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required'),

  lastName: yup
    .string()
    .required('Last name is required'),

  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),

  contact: yup
    .string()
    .matches(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      'Contact number is not valid'
    )
    .required('Contact is required'),

  address1: yup
    .string()
    .required('Address Line 1 is required'),

  address2: yup
    .string()
    .notRequired()
});
    
    return (
<Box m='20px'>
    <Header title='Profile' subtitle='Create New Profile'/>

    <Formik onSubmit={handleFormSubmit}  
    initialValues={initialValues} 
    validationSchema={profileSchema}  >
        {({values,touched,errors,handleChange,handleSubmit,handleBlur})=>(
            <form onSubmit={handleFormSubmit}>
                <Box>
                    <Box display="flex" gap="20px" mt="10px">
<TextField name='firstName'   margin='normal' type='text' 
fullWidth label='First Name' 
onBlur={handleBlur} onChange={handleChange} 
value={values.firstName}  
error={!!touched.firstName && !!errors.firstName} 
helperText={touched.firstName && errors.firstName} 

/>

<TextField name='lastName'  margin='normal' type='text' 
fullWidth label='Last Name'   
onBlur={handleBlur} onChange={handleChange} 
value={values.lastName}  
error={!!touched.lastName && !!errors.lastName} 
helperText={touched.lastName && errors.lastName}/>
</Box>

<TextField name='email'   margin='normal'  type='text' 
fullWidth label='Email' 
onBlur={handleBlur} onChange={handleChange} 
value={values.email}  
error={!!touched.email && !!errors.email} 
helperText={touched.email && errors.email}/>


<TextField name='contanct'    margin='normal' type='text' 
fullWidth label='Contanct' 
onBlur={handleBlur} onChange={handleChange} 
value={values.contact}  
error={!!touched.contact && !!errors.cont} 
helperText={touched.contact && errors.contact}/>

<TextField name='address1'   margin='normal'  type='text' 
fullWidth label='Address1' 
onBlur={handleBlur} onChange={handleChange} 
value={values.address1}  
error={!!touched.address1 && !!errors.address1} 
helperText={touched.address1&& errors.address1}/>

<TextField name='address2'   margin='normal'   type='text' 
fullWidth label='Address2' 
onBlur={handleBlur} onChange={handleChange} 
value={values.address2}  
error={!!touched.address2 && !!errors.address2} 
helperText={touched.address2 && errors.address2}/>
</Box>
            </form>
        )}


    </Formik>
    
</Box>
        
    )
}

export default Profile
