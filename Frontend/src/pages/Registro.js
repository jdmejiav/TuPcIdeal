 // Render Prop
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axiosInstance from '../axios'
import Swal from 'sweetalert2'
import img_registro from '../images/foto-registro.png'
import Navbar from '../components/Navbar/Navbar';
import { FooterContainer } from '../components/footer/containers/footer';
 

const styleField= {

  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  boxShadow: 'inset 0 1px 3px #ddd',
  borderRadius: '4px',
  webkitBoxSizing: 'border-box',
  mozBoxSizing: 'border-box',
  boxSizing: 'border-box',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '12px',
  paddingBottom: '12px',
};

 export default class Registro extends Component {
      
   constructor(props) {
     super(props);
   }
     
     render() {
         return(
           <div className= 'container'>
            <Navbar/>  
              <div className='form'>
                <div className="box-left">
                  <h1 className ='titulomain'>Registro Usuario</h1>
                  <Formik 
                    initialValues={{ nombre:'',apellidos:'',email: '', password: ''}}
                    validate={values => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                      ) {
                        errors.email = 'Invalid email address';
                      }
                      
                      if(!values)
                      {
                        errors.password = 'Required'; 
                      }
            
                      if(!values.nombre)
                      {
                        errors.name = 'Required'; 
                      }
            
                      if(!values.apellidos)
                      {
                        errors.apellidos = 'Required'; 
                      }
            
                      return errors;
                    }}
            
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          axiosInstance
                            .post(`user/registrer/`, {
                                email: values.email,
                                user_name: values.user,
                                first_name: values.nombre,
                                last_name: values.apellidos,
                                password: values.password
                            }).then(function (response) {
                                Swal.fire({
                                  icon: 'success',
                                  title: 'Bienvenido!!',
                                  text: `Hola ${response.data.first_name} gracias por registrate`,
                                  timer: 2000,
                                  timerProgressBar: true,
                                }).then( () =>
                                {
                                  window.location = "/login";
                                });
                            })
                            .catch(function (error) {
                            Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: `Perdon ${values.nombre} pero el usuario o email ya existe`,
                              footer: '<a href="http://localhost:3000/login">Inicia sesion</a>'
                              })
                            });
                          setSubmitting(false);
                        }, 400);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className='formulario'>
                        <Field style={styleField} className='field' placeholder='Apodo' type="text" name="user" />
                        <ErrorMessage name="user" component="div" />
                        <Field style={styleField} className='field' placeholder='Nombre' type="text" name="nombre" />
                        <ErrorMessage name="nombre" component="div" />
                        <Field style={styleField} className='field' placeholder='Apellidos' type="text" name="apellidos" />
                        <ErrorMessage name="apellidos" component="div" />
                        <Field style={styleField} className='field' placeholder='correo@mail.com' type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <Field style={styleField} className='field' placeholder='Contraseña' type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" className="btn" disabled={isSubmitting}>
                          Registrar
                        </button>
                      </Form>
                      
                    )}
                  </Formik>
                </div>
                <div className="box-right">
                  <img src={img_registro}></img>
                </div>
              </div>
            <FooterContainer/>
          </div>
     )}
  }
  
