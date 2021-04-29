import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../footer/containers/footer";
import React, { useState } from "react";
import "./intermedio.css";
import { Formik, Field, Form } from "formik";

const Presupuesto = ["Bajo", "Moderado", "Alto"];
const Tipo = ["Portatil", "Escritorio", "All in one"];
const Marca = ["HP", "Lenovo", "Asus", "Otro", "Indiferente"];
const Usos = [
  "Ofitmatica",
  "Estudio",
  "Multimedia",
  "Diseño Grafico",
  "Programacion",
  "Programas de ingenieria",
  "Otro",
];
const Memoria = ["4GB", "8GB", "16GB", "Otro"];
const Solido = ["Si", "No"];
const Pantalla = ["Grande", "Equilibrado", "Pequeño"];

const infoPresupuesto = {
  Bajo:
    "Computador para cumplir con los requerimientos, pero es posible que en un mediano plazo se quede obsoleto",
  Moderado:
    "Computador para complir con los requerimientos durante un buen periodo de tiempo",
  Alto:
    "Computador para cumplir con los requerimientos de manera holgada y continuar funcionando por muchos años",
};

const infoTipo = {
  Portatil: "Computador Portátil",
  Escritorio: "Computador de Mesa (Solo la Torre)",
  "All in one":
    "Computador con todo en uno de mesa (Pantalla es pantalla y torre a la vez)",
};

const infoPantalla = {
  Grande:
    "Computador con pantalla grande, suele ser pesado y tener una batería más duradera y pesado",
  Equilibrado:
    "Computador con pantalla equilibrada, suele tener una duración de batería estándar y es fácil de transportar",
  Pequeño:
    "Computador con pantalla pequeña, suelen tener una duración de batería larga y son fáciles de transportar",
};

const FormikCheck = () => {
  const [portatil, setPortatil] = useState(false);
  const [nJSON, setnJSON] = useState(6);

  const FormikPresupuesto = ({ name }) => {
    return (
      <div>
        <label id="medio">
          <Field type="radio" name="Presupuesto" value={name} />
          <span> {name}</span>
        </label>
        <div className="icon info-presupuesto">
          <div className="texto-info-presupuesto">
            <p>{infoPresupuesto[name]}</p>
          </div>
          <span>
            <i class="far fa-question-circle"></i>
          </span>
        </div>
      </div>
    );
  };

  const handleOnclickTipo = async (e, name) => {
    if (name == "Portatil") {
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
      <div className="container_basico">
        <div className="titulo_clas">
          <h2>Encuentra con nosotros TuPCideal</h2>
        </div>
        <div className="infobasic">
          Con el siguiente formulario nos haremos una idea de cuanto sabes sobre
          computadores así podremos darte una mejor experiencia.
          <p>Nivel intermedio</p>
        </div>
        <Formik
          initialValues={{
            Presupuesto: [],
            Tipo: [],
            Marca: [],
            Usos: [],
            Memoria: [],
            Solido: [],
          }}
          onSubmit={async (values) => {
            console.log(values);
            alert(JSON.stringify(values, null, nJSON));
            localStorage.setItem("formResult", JSON.stringify(values));
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
                  <div className="pregunta1">¿Qué presupuesto tienes?</div>
                  <div className="check1">
                    {Presupuesto.map((name) => (
                      <FormikPresupuesto name={name} />
                    ))}
                  </div>
                </div>
                <div className="cont2">
                  <div className="preguntai2">
                    ¿Qué tipo de computador quieres?
                  </div>
                  <div className="checki2">
                    {Tipo.map((name) => (
                      <FormikTipo name={name} />
                    ))}
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
                    ¿Memoria minima?
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
                    ¿Necesitas disco de estado solido?
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

              <div className="btnint">
                <button type="submit" className="btn-int">
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
};

export default FormikCheck;
