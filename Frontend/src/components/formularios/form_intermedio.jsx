import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../footer/containers/footer";
import React, { useState } from "react";
import "./intermedio.css";
import { Formik, Field, Form } from "formik";
import Slider, { SliderTooltip } from 'rc-slider';import 'rc-slider/assets/index.css';


const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value}`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

const Tipo = ["Portátil", "Escritorio", "All in one"];
const Marca = ["HP", "Lenovo", "Asus", "Indiferente"];
const Usos = [
  "Ofimática",
  "Estudio",
  "Multimedia",
  "Diseño Gráfico",
  "Programación",
  "Programas de ingeniería",
];
const Memoria = ["4GB", "8GB", "16GB", "Otro"];
const Solido = ["Si", "No"];
const Pantalla = ["Grande", "Equilibrado", "Pequeño"];

const infoPresupuesto = {
  "Presupuesto":"Elije un mínimo y un máximo que estas dispueso a pagar para encontrar TuPCIdeal (COP)"
};
const infoTipo = {
  "Portátil": "Computador Portátil",
  Escritorio: "Computador de Mesa (Solo la Torre)",
  "All in one":
    "Computador con todo en uno de mesa (Pantalla es pantalla y torre a la vez)",
};

const infoPantalla = {
  Grande:
    "Pantalla de más de 15\" (pulgadas)",
  Equilibrado:
    "Pantalla de 13\" a 14.9\" (pulgadas)",
  Pequeño:
    "Pantalla de hasta 13.5\" (pulgadas)",
};

const FormikCheck = () => {
  const [portatil, setPortatil] = useState(false);
  const [nJSON, setnJSON] = useState(6);

  var variable = [1000000,6000000]

  const FormikPresupuesto = ({ name }) => {
    return (
      <div className="pregunta-presuspuesto">
          <Range 
          min={1000000} 
          max={6000000} 
          defaultValue={[1000000, 2000000]} 
          allowCross={false}
          tipFormatter={value => `${value}`} 
          onChange = {async e => {
            variable=e
          }
          }
          />
      </div>
    );
  };

  const handleOnclickTipo = async (e, name) => {
    if (name == "Portátil") {
      setPortatil(true);
      setnJSON(7);
    } else {
      setPortatil(false);
      setnJSON(6);
    }
  };

  const FormikTipo = ({ name }) => {
    return (
      <div
        onClick={(val) => {
          handleOnclickTipo(val, name);
        }}
      >
        <label id="medio">
          <Field type="radio" name="Tipo" value={name} />
          <span> {name}</span>
        </label>
        <div className="icon info-presupuesto">
          <div className="texto-info-presupuesto">
            <p>{infoTipo[name]}</p>
          </div>
          <span>
            <i class="far fa-question-circle"></i>
          </span>
        </div>
      </div>
    );
  };

  const FormikMarca = ({ name }) => {
    return (
      <div>
        <label id="medio">
          <Field type="checkbox" name="Marca" value={name} />
          <span> {name}</span>
        </label>
      </div>
    );
  };

  const FormikUsos = ({ name }) => {
    return (
      <div>
        <label id="medio">
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

  const FormikMemoria = ({ name }) => {
    return (
      <div>
        <label id="medio">
          <Field type="radio" name="Memoria" value={name} />
          <span> {name}</span>
        </label>
      </div>
    );
  };

  const FormikSolido = ({ name }) => {
    return (
      <div>
        <label id="medio">
          <Field type="radio" name="Solido" value={name} />
          <span> {name}</span>
        </label>
      </div>
    );
  };

  const FormikPantalla = ({ name }) => {
    return (
      <div className="pregunta-pantalla">
        <label id="basic">
          <Field type="radio" name="Pantalla" value={name} />
          <span> {name}</span>
        </label>
        <div className="icon info-presupuesto">
          <div className="texto-info-presupuesto">
            <p>{infoPantalla[name]}</p>
          </div>
          <span>
            <i class="far fa-question-circle"></i>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="titulo_clas">
          <h2>Encuentra con nosotros TuPCideal</h2>
        </div>
      <div className="container_medio">

        <div className="infobasic">
          Con el siguiente formulario nos haremos una idea de cuanto sabes sobre
          computadores así podremos darte una mejor experiencia.
          <p>Nivel intermedio</p>
        </div>
        <Formik
          initialValues={{
            tipof: 1,
            Presupuesto: [],
            Tipo: [],
            Marca: [],
            Usos: [],
            Memoria: [],
            Solido: [],
          }}
          onSubmit={async (values) => {
            console.log(values);
            values.Presupuesto = variable
            //alert(JSON.stringify(values, null, nJSON));
            if(values.Tipo=="Escritorio" || values.Tipo=="All in one" )
            {
              values.Pantalla="Equilibrado"
            }
            localStorage.setItem("formResult", JSON.stringify(values));
            window.location = "/resultados"
            
          }}
        >
          {({ values }) => (
            <Form>
              <div className="preguntas_bas">

              <div className="cont1">
                  <div className="preguntai">
                    ¿Qué tipo de computador quieres?
                  </div>
                  <div className="checki2">
                    {Tipo.map((name) => (
                      <FormikTipo name={name} />
                    ))}
                  </div>
                </div>  

                <div className="cont2">
                  <div className="preguntai2">¿Qué presupuesto tienes?
                    
                  <div className="icon info-presupuesto">
                    <div className="texto-info-presupuesto">
                      <p>{infoPresupuesto["Presupuesto"]}</p>
                    </div>
                    <span>
                      <i class="far fa-question-circle"></i>
                    </span>

                 </div>
                 <div className="check1">
                      <FormikPresupuesto/>
                  </div>

                  </div>
                  
                </div>
                



                <div className="cont3">
                  <div className="preguntai3">
                    ¿Tienes alguna marca en mente?
                  </div>
                  <div className="checki3">
                    {Marca.map((name) => (
                      <FormikMarca name={name} />
                    ))}
                  </div>
                </div>
                <div className="cont4">
                  <div className="preguntai4">
                    ¿Para qué vas a utilizar el computador?
                  </div>
                  <div className="checki4">
                    {Usos.map((name) => (
                      <FormikUsos name={name} />
                    ))}
                  </div>
                </div>
                <div className="cont5">
                  <div className="preguntai5">
                    ¿Memoria mínima?
                    <div
                      className="icon info-presupuesto"
                      style={{ top: "25px", left: "0px" }}
                    >
                      <div className="texto-info-presupuesto">
                        <p>
                          La memoria RAM es la que permite abrir múltiples
                          programas al mismo tiempo o abrir programas muy
                          pesador
                        </p>
                      </div>
                      <span>
                        <i class="far fa-question-circle"></i>
                      </span>
                    </div>
                  </div>
                  <div className="checki5">
                    {Memoria.map((name) => (
                      <FormikMemoria name={name} />
                    ))}
                  </div>
                </div>
                <div className="cont6">
                  <div className="preguntai6">
                    ¿Necesitas disco de estado sólido?
                    <div
                      className="icon info-presupuesto"
                      style={{ top: "25px", left: "0px" }}
                    >
                      <div className="texto-info-presupuesto">
                        <p>
                          Los discos de estado sólido sirven para que el sistema
                          operativo encienda más rápido y abra más rápido los
                          programas, son más caros que los mecánicos
                        </p>
                      </div>
                      <span>
                        <i class="far fa-question-circle"></i>
                      </span>
                    </div>
                  </div>
                  <div className="checki6">
                    {Solido.map((name) => (
                      <FormikSolido name={name} />
                    ))}
                  </div>
                </div>
                {portatil && (
                  <div className="contPreguntaPantalla">
                    <div className="PreguntaPantalla">
                      ¿Qué Tamaño de pantalla necesitas?
                    </div>
                    <div className="check5">
                      {Pantalla.map((name) => (
                        <FormikPantalla name={name} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="btnint">
                <button type="submit" className="btn-int">
                  Continuar{" "}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  );
};

export default FormikCheck;
