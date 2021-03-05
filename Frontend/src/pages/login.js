import React, { Component } from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../components/login/FormikControl'
import Login from '../images/login2.png';


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
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik=>{
                        return <Form >
                            <h1 className="titulo_login">
                                Login usuario existente
                            </h1>
                            <img className="foto_login" src={Login} className="PC"  />
                            <div className="form_login"> 
                                <div className="email_login">
                            <FormikControl
                                control= 'input'
                                type ='email'
                                label ='Email'
                                name= 'email'/>
                                </div>
                                <div className="cont_login">
                                <FormikControl
                                control= 'input'
                                type = 'password'
                                label='Password'
                                name ='password'/> 
                                </div>
                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                            </div>
                        </Form>
                    }
                }
            </Formik>
        )
    }
    
}
