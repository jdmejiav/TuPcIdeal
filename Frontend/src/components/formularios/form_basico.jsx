import Navbar from '../Navbar/Navbar'
import {FooterContainer} from '../footer/containers/footer'
import React from "react";
import './basico.css'
import { Formik, Field, Form } from "formik";


const Presupuesto = ["Bajo", "Moderado", "Alto"];
const Tipo = ["Portatil", "Escritorio", "All in one"];
const Marca = ["HP","Lenovo","Asus","Otro", "Indiferente"];
const Usos =["Ofitmatica", "Estudio", "Multimedia", "Diseño Grafico",
"Programacion", "Programas de ingenieria", "Otro" ];
const FormikCheck = () => (
  <div>
    <Navbar/>
    <div className ="container_basico">
    <div className="titulo_clas">
      <h2>Encuentra con nosotros TuPCideal</h2>
    </div>
    <div className="infobasic">
      Con el siguiente formulario nos haremos una idea de cuanto sabes sobre computadores
      así podremos darte una mejor experiencia.
    </div>
    <Formik
      initialValues={{
        Presupuesto: [],
        Tipo: [],
        Marca: [],
        Usos: [],
      }}
      onSubmit={async (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 4));
      }}
    >     
      {({ values }) => (
        
        <Form> 
          <div role="group" aria-labelledby="checkbox-group" className="preguntas_bas">
            <div className="cont1">
              <div className="pregunta1">
                ¿Qué presupuesto tienes?
              </div>
              <div className="check1">
                {Presupuesto.map((name) => (
                 <FormikPresupuesto name={name} />
                ))}
              </div>  
            </div>
            <div className="pregunta2">
                ¿Qué tipo de computador quieres?
            </div>
            <div className="check2">
            {Tipo.map((name) => (
              <FormikTipo name={name} />
            ))}
            </div>
            <div className="pregunta3">
                ¿Tienes alguna marca en mente?
            </div>
            <div className="check3">
            {Marca.map((name) => (
              <FormikMarca name={name} />
            ))}
            </div>
            <div className="pregunta4">
                ¿Para qué vas a utilizar el computador?
            </div>
            <div className="check4">
            {Usos.map((name) => (
              <FormikUsos name={name} />
            ))}
            </div>
          </div>
          <button type="submit" className="btn-basic">Continuar </button>
        </Form>
      )}
    </Formik>
    </div>
  <FooterContainer/>
  </div>
  
);

const FormikPresupuesto = ({ name }) => {
  return (
    <div>
      <label id="basic" >
        <Field type="radio" name="Presupuesto" value={name} />
        <span> {name}</span>
      </label>
    </div>
  );
};

const FormikTipo= ({ name }) => {
  return (
    <div>
      <label id="basic">
        <Field type="radio" name="Tipo" value={name} />
        <span> {name}</span>
      </label>
    </div>
  );
};

const FormikMarca = ({ name }) => {
  return (
    <div>
      <label id="basic">
        <Field type="checkbox" name="Marca" value={name} />
        <span> {name}</span>
      </label>
    </div>
  );
};

const FormikUsos = ({ name }) => {
  return (
    <div>
      <label id="basic">
        <Field
          type="checkbox"
          name="Usos"
          value={name}
          style={{ background: "green" }}
        />
        <span> {name}</span>
      </label>
    </div>
  );
};
export default FormikCheck;