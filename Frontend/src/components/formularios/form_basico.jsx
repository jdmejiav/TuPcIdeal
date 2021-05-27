import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../footer/containers/footer";
import React, { useState } from "react";
import "./basico.css";
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
const Pantalla = ["Grande", "Equilibrado", "Pequeño"];

const infoPresupuesto = {
"Presupuesto":"Elije un mínimo y un máximo que estas dispueso a pagar para encontrar TuPCIdeal (COP)"
};

const infoTipo = {
  Portatil: "Computador Portátil",
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
  const [nJSON, setnJSON] = useState(4);
  
  var variable =[1000000,6000000]

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
      setnJSON(5);
    } else {
      setPortatil(false);
      setnJSON(4);
    }
  };

  const FormikTipo = ({ name }) => {
    return (
      <div
        className="pregunta-tipo"
        onClick={(val) => {
          handleOnclickTipo(val, name);
        }}
      >
        <label id="basic">
          <Field id={name} type="radio" name="Tipo" value={name} />
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
      <div className="container_basico">
        <div className="titulo_clas">
          <h2>Encuentra con nosotros TuPCideal</h2>
        </div>
        <div className="infobasic">
          Con el siguiente formulario nos haremos una idea de cuanto sabes sobre
          computadores así podremos darte una mejor experiencia.
        </div>

        <Formik
          initialValues={{
            tipof: 0,
            Presupuesto: [],
            Tipo: [],
            Marca: [],
            Usos: [],
            Pantalla: [],
          }}
          onSubmit={async (values) => {
            //console.log(values);

            values.Presupuesto=variable

            if(values.Tipo=="Escritorio" || values.Tipo=="All in one" )
            {
              values.Pantalla="Equilibrado"
            }
            //alert(JSON.stringify(values, null, nJSON));
            localStorage.setItem("formResult", JSON.stringify(values));
            window.location= "/resultados"
          }}
        >
          {({ values }) => (
            <Form>
              <div
                role="group"
                aria-labelledby="checkbox-group"
                className="preguntas_bas"
              >
                <div className="cont1">
                  <div className="pregunta1">¿Qué tipo de computador quieres?</div>
                
                  <div className="check1">
                  {Tipo.map((name) => (
                    <FormikTipo name={name} />
                  ))}
                </div>
                  
                </div>
                <div className="pregunta2">
                  ¿Qué presupuesto tienes?
                  <div className="icon info-presupuesto">
                    <div className="texto-info-presupuesto">
                      <p>{infoPresupuesto["Presupuesto"]}</p>
                    </div>
                    <span>
                      <i class="far fa-question-circle"></i>
                    </span>
                 </div>
                </div>
                
                <div className="check2">
                    <FormikPresupuesto/>
                  </div>
                <div className="pregunta3">¿Tienes alguna marca en mente?</div>
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
                {portatil && (
                  <div>
                    <div className="pregunta5">
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
              <button type="submit" className="btn-basic">
                Continuar{" "}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <FooterContainer />
    </div>
  );
};

export default FormikCheck;