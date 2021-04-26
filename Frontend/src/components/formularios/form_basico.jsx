import Navbar from '../Navbar/Navbar'
import {FooterContainer} from '../footer/containers/footer'
import React, { useState } from "react";
import './basico.css'
import { Formik, Field, Form } from "formik";
import axiosInstance from '../../axios'


const Presupuesto = ["Bajo", "Moderado", "Alto"];
const Tipo = ["Portatil", "Escritorio", "All in one"];
const Marca = ["HP","Lenovo","Asus","Otro", "Indiferente"];
const Usos =["Ofimatica", "Estudio", "Multimedia", "Diseño Grafico",
"Programacion", "Programas de ingenieria", "Otro" ];
const Pantalla  =["Grande","Equilibrado","Pequeño"];


const infoPresupuesto ={
  "Bajo":"Computador para cumplir con los requerimientos, pero es posible que en un mediano plazo se quede obsoleto",
  "Moderado":"Computador para complir con los requerimientos durante un buen periodo de tiempo",
  "Alto":"Computador para cumplir con los requerimientos de manera holgada y continuar funcionando por muchos años"
};

const infoTipo ={
  "Portatil":"Computador Portátil",
  "Escritorio":"Computador de Mesa (Solo la Torre)",
  "All in one":"Computador con todo en uno de mesa (Pantalla es pantalla y torre a la vez)"
};

const infoPantalla ={
  "Grande":"Computador con pantalla grande, suele ser pesado y tener una batería más duradera y pesado",
  "Equilibrado":"Computador con pantalla equilibrada, suele tener una duración de batería estándar y es fácil de transportar",
  "Pequeño":"Computador con pantalla pequeña, suelen tener una duración de batería larga y son fáciles de transportar"
};

const FormikCheck = () => {


  const [portatil,setPortatil]= useState(false);
  const [nJSON, setnJSON] = useState(4);

  const FormikPresupuesto = ({ name }) => {
    console.log( infoPresupuesto[name])
    console.log( name)
    return (
      <div className="pregunta-presuspuesto">
        <label id="basic" >
          <Field type="radio" name="Presupuesto" value={name} />
          <span> {name}</span>
          
        </label>
        <div className="icon info-presupuesto">
          <div className= "texto-info-presupuesto">
            <p>{infoPresupuesto[name]}</p>
          </div>
          <span><i class="far fa-question-circle"></i></span>

        </div>
      </div>
    );
  };

  const handleOnclickTipo =async (e,name)=>{
    if (name=="Portatil"){
      setPortatil(true)
      setnJSON(5)
    }
    else{
      setPortatil(false)
      setnJSON(4)
    }

  }


  const FormikTipo= ({ name }) => {
    
    return (
      <div className="pregunta-tipo" onClick ={(val)=>{
        handleOnclickTipo(val,name)
      }
    }>
        <label id="basic">
          <Field id = {name} type="radio" name="Tipo" value={name}  
          />
          <span> {name}</span>
        </label>
        <div className="icon info-presupuesto">
          <div className= "texto-info-presupuesto">
            <p>{infoTipo[name]}</p>
          </div>
          <span><i class="far fa-question-circle"></i></span>

        </div>
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

  const FormikPantalla= ({ name }) => {
    
    return (
      <div className="pregunta-pantalla">
        <label id="basic">
          <Field type="radio" name="Pantalla" value={name}/>
          <span> {name}</span>
        </label>
        <div className="icon info-presupuesto">
          <div className= "texto-info-presupuesto">
            <p>{infoPantalla[name]}</p>
          </div>
          <span><i class="far fa-question-circle"></i></span>

        </div>
      </div>
    );
  };

  return(
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
          Pantalla:[],
        }}
        onSubmit={async (values) => {
          console.log(values);
          alert(JSON.stringify(values, null, nJSON));
          setTimeout(() => {
            axiosInstance
              .post(`form/basic/`, {
                  Presupuesto: values.Presupuesto,
                  Tipo: values.Tipo,
                  Marca: values.Marca,
                  Usos: values.Usos,
                  Pantalla: values.Pantalla
              }).then(function (response) {
                  alert(JSON.stringify(response))
              })
              .catch(function (error) {

              });
          }, 1000);
          
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
              {portatil && <div> 
                <div className="pregunta5">
                        ¿Qué Tamaño de pantalla necesitas?
                </div>
                <div className="check5">
                {Pantalla.map((name) => (
                  <FormikPantalla name={name} />
                ))}
                </div>
              </div>
              }
              
            </div>
            <button type="submit" className="btn-basic">Continuar </button>
          </Form>
        )}
      </Formik>
      </div>
    <FooterContainer/>
    </div>
    
    )  
};


export default FormikCheck;