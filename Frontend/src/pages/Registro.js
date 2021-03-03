 // Render Prop
 import React, { Component } from 'react'
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import axios from 'axios'
 import Swal from 'sweetalert2'

 export default class Registro extends Component {
     
  constructor(props) {
    super(props);
  }
    
    render() {
        return(
    <div className= 'container'>
    <div className='form'>
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
           //alert(JSON.stringify(values, null, 2));
           axios.post('http://127.0.0.1:8000/api/createU', {
                correo: values.email,
                nombre: values.nombre,
                apellidos: values.apellidos,
                password: values.password
            })
            .then(function (response) {
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Exito!!',
              text: 'Usuario Registrado',
              timer: 3000,
              timerProgressBar: true,
            })
            })
            .catch(function (error) {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El correo ya fue registrado',
              footer: '<a href="http://localhost:3000/login">Inicia sesion</a>'
            })
            });
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className='formulario'>
           <Field className='field' placeholder='Nombre' type="text" name="nombre" />
           <ErrorMessage name="nombre" component="div" />
           <Field className='field' placeholder='Apellidos' type="text" name="apellidos" />
           <ErrorMessage name="apellidos" component="div" />
           <Field className='field' placeholder='correo@mail.com' type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field className='field' placeholder='Contraseña' type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" className="btn" disabled={isSubmitting}>
             Registrar
           </button>
         </Form>
       )}
     </Formik>
   </div>
   </div>
    )}
 }
 