import React, { Component } from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../components/FormikControl'


export default class Mainpage extends Component {

    render(){
        
        const initialValues ={
            email: '',
            password: ''
        }

        const validationSchema = Yup.object({
            email: Yup.string().email('email incorrecto').required('required'),
            password: Yup.string().required('required')
        })

        const onSubmit = values =>{
            console.log ('Form data', values)
        }

        return(
            <Formik initialValues ={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik=>{
                        return <Form>
                            <FormikControl
                                control= 'input'
                                type ='email'
                                label ='Email'
                                name= 'email'/>
                                <FormikControl
                                control= 'input'
                                type = 'password'
                                label='Password'
                                name ='password'/> 
                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    }
                }
            </Formik>
        )
    }
    
}
