//import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import React from "react";
import { Formik, Field, Form } from "formik";

const Status = ["OPEN", "ACKNOWLEDGED", "SUPPRESSED", "RESOLVED", "CLOSED"];

const Severity = ["LOW", "MEDIUM", "HIGH", "CRITICAL", "URGENT"];
const Usos = ["Trabajo","Compras","Ocio","Edición"];
const Usuario =["Nulo", "Basico", "Intermedio", "Avanzado"];
const FormikCheck = () => (
  <div>
    <Navbar/>
    <Formik
      initialValues={{
        status: [],
        severity: [],
        usos: [],
        usuario: [],
      }}
      onSubmit={async (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 4));
      }}
    >
      {({ values }) => (
        <Form>
          <div role="group" aria-labelledby="checkbox-group">
            {Status.map((name) => (
              <FormikCheckBoxStatus name={name} />
            ))}
            {Severity.map((name) => (
              <FormikCheckBoxSeverity name={name} />
            ))}
            {Usos.map((name) => (
              <FormikUsos name={name} />
            ))}
            {Usuario.map((name) => (
              <FormikUsuario name={name} />
            ))}
          </div>
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

const FormikCheckBoxStatus = ({ name }) => {
  return (
    <div>
      <label>
        <Field type="checkbox" name="status" value={name} />
        <span> {name}</span>
      </label>
    </div>
  );
};

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

const FormikCheckBoxSeverity = ({ name }) => {
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
};
export default FormikCheck;

