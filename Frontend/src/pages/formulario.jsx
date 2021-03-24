//import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import React from "react";
import '../styles/formulario.css'
import { Formik, Field, Form } from "formik";
import {FooterContainer} from '../components/footer/containers/footer'

const Status = ["OPEN", "ACKNOWLEDGED", "SUPPRESSED", "RESOLVED", "CLOSED"];

const Severity = ["LOW", "MEDIUM", "HIGH", "CRITICAL", "URGENT"];
const Usos = ["Trabajo","Compras","Ocio","Edición"];
const Usuario =["Nulo", "Novato", "Medio", "Avanzado"];
const FormikCheck = () => (
  <div>
    <Navbar/>
    <div className="titulo_clas">
      <h2>Encuentra con nosotros TuPCideal</h2>
    </div>
    <div className="info">
      Con el siguiente formulario nos haremos una idea de cuanto sabes sobre computadores
      así podremos darte una mejor experiencia.
    </div>
    <div className="pregunta_clasi">
        ¿Como consideras tu nivel de conocimiento sobre computadores?
      </div>
    <Formik
      initialValues={{
        /*status: [],
        severity: [],
        usos: [],*/
        usuario: [],
      }}
      onSubmit={async (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 4));
      }}
    >     
      {({ values }) => (
        <Form>
          <div role="group" aria-labelledby="checkbox-group" className="clasificacion">
            {Usuario.map((name) => (
              <FormikUsuario name={name} />
            ))}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    <FooterContainer/>
  </div>
  
);

/*const FormikCheckBoxStatus = ({ name }) => {
  return (
    <div>
      <label>
        <Field type="checkbox" name="status" value={name} />
        <span> {name}</span>
      </label>
    </div>
  );
};*/

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

/*const FormikCheckBoxSeverity = ({ name }) => {
  return (
    <div>
      <label>
        <Field type="checkbox" name="severity" value={name} />
        <span> {name}</span>
      </label>
    </div>
  );
};

const FormikUsos = ({ name }) => {
  return (
    <div>
      <label>
        <Field
          type="checkbox"
          name="status"
          value={name}
          style={{ background: "green" }}
        />
        <span> {name}</span>
      </label>
    </div>
  );
};*/
export default FormikCheck;

