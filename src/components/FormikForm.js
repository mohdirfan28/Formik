import React from 'react'
import {Formik} from 'formik'
//import { FormSchema } from './Formschema'
import * as Yup from "yup";

function FormikForm() {
  

  return (
    <Formik initialValues={{
        name: '',
        email: '',
        pass:'',
        cpass:''
    }}
    onSubmit = {async(values)=>{
        console.log(values);
    }}
    validationSchema = { Yup.object().shape({
        name: Yup.string().required('Please enter a valid name'),
        email: Yup.string().required('Please enter a valid email'),
        pass:Yup.string().required('Please enter a valid password'),
        cpass:Yup.string().required('Please enter a valid').oneOf([Yup.ref('pass')],'Password did not match')
    })}
    >
    {({handleSubmit, handleBlur, handleChange, errors, values})=>(
        <div>
      <h1>Formik demo </h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="">Enter Your Name</label>
        <input type="text" name='name' onChange={handleChange} value={values.name} onBlur={handleBlur}/>
        <br />
        <span style={{color:'red'}}>{errors.name}</span>
        <br /> <br />
        <label htmlFor="">Enter Your Email</label>
        <input type="text" name='email' onChange={handleChange} value={values.email} onBlur={handleBlur}/>
        <br />
        <span style={{color:'red'}}>{errors.email}</span>
        <br /> <br />
        <label htmlFor="">Enter apssword</label>
        <input type="text" name='pass' onChange={handleChange} value={values.pass} onBlur={handleBlur}/>
        <span style={{color:'red'}}>{errors.pass}</span>
        <br /> <br />
        <label htmlFor="">Enter apssword</label>
        <input type="text" name='cpass' onChange={handleChange} value={values.cpass} onBlur={handleBlur}/>
        <span style={{color:'red'}}>{errors.cpass}</span>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>

    )}
        
    </Formik>
  )
}

export default FormikForm
