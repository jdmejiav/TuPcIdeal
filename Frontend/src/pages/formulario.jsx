//import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import React from "react";
import "../styles/formulario.css";
import { Formik, Field, Form } from "formik";
import { FooterContainer } from "../components/footer/containers/footer";
const Usuario = ["Novato", "Medio", "Avanzado"];

const FormikCheck = () => (
  <div>
    <Navbar />
    <div className="titulo_clas">
      <h2>Encuentra con nosotros TuPCideal</h2>
    </div>
    <div className="info">
      Con el siguiente formulario nos haremos una idea de cuanto sabes sobre
      computadores así podremos darte una mejor experiencia.
    </div>


    <div>
    <div className="pregunta_clasi">
      ¿Como consideras tu nivel de conocimiento sobre computadores?
    </div> 
    <Formik
      initialValues={{
        usuario: [],
      }}
      onSubmit={(values) => {
        if (values.usuario == "Novato") {
          window.location = "/formbasic";
        } else if (values.usuario == "Medio") {
          window.location = "/formmedio";
        } else if (values.usuario == "Avanzado") {
          window.location = "/formavanzado";
        }
      }}
    >
      {() => (
        <Form>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className="clasificacion"
          >
            {Usuario.map((name) => (
              <FormikUsuario name={name} />
            ))}
          </div>
          <div className="btmform">
            <button type="submit" className="btn-form">
              Continuar{" "}
            </button>
          </div>
        </Form>
      )}
    </Formik>
    </div>
    <FooterContainer />
  </div>
  
);

const FormikUsuario = ({ name }) => {
  return (
    <div>
      <label>
        <Field type="radio" name="usuario" value={name} />
        <span> {name}</span>
      </label>
    </div>
  );
};

export default FormikCheck;
