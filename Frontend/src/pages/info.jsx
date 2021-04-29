import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import procesador from "../images/Intel vs AMD.png";
import grafica from "../images/grafica.png";
import RAM from "../images/RAM.png";

export default class info extends Component {
  render() {
    return (
      <div className="container_info">
        <Navbar />
        <h1 className="titulo_info">Información sobre computadores</h1>
        <div className="articulos">
          <section>
            <article className="procesadores">
              <h2 id="subt"> Procesadores</h2>
              <div id="pq">
                También conocido como{" "}
                <a href="https://es.wikipedia.org/wiki/Unidad_central_de_procesamiento">
                  CPU
                </a>{" "}
                (nombre que probablemente hayas escuchado muchas veces), es la
                unidad de procesamiento encargada de interpretar las
                instrucciones que tú le quieres dar al computador, esto gracias
                a una serie de algoritmos matemáticos que permiten que los
                comandos que hagas sean convertidos a un lenguaje que el
                computador pueda interpretar para realizar sus operaciones.
              </div>
              <p id="parrafo" className="p2">
                <h2>características principales</h2>
                <div id="pq">
                  Todas las CPU son distintas y algunas están diseñadas de modo
                  que las puedas utilizar para ciertas cosas en específico, a
                  continuación, te diremos las principales características de
                  los procesadores.
                </div>
                <dl>
                  <dt>Número de núcleos:</dt>
                  <dd>
                    Con el avance de la tecnología, ya es posible encontrar
                    tanto procesadores de Intel como de AMD que cuentan desde 2
                    hasta 16 núcleos respectivamente. Estos núcleos son los
                    encargados de llevar a cabo multitud de tareas de manera
                    simultánea sin que el PC tenga que trabajar a “marchas
                    forzadas”.
                  </dd>
                  <dt>Memoria caché:</dt>
                  <dd>
                    A la hora de “recordar” cualquier tarea, el propio ordenador
                    hace uso de la memoria RAM. Sin embargo, a veces esto no es
                    del todo suficiente y por tanto es necesario que utilice la
                    memoria caché de la propia CPU
                  </dd>
                  <dt>Consumo energético</dt>
                  <dd>
                    Es normal que nos encontremos con CPU donde su consumo
                    energético varíe notablemente. Es un valor que se muestra en
                    vatios (W) y como es obvio, aquellos procesadores de gama
                    superior serán más propensos a consumir más energía. Ante
                    esto, es importante también contar con una fuente de
                    alimentación acorde a la potencia de nuestro procesador y
                    tarjeta gráfica.
                  </dd>
                </dl>
              </p>
              <p id="parrafo">
                <h2>Tipos de procesadores</h2>
                <div id="pq">
                  Existen dos tipos de procesadores que son los más utilizados
                  comúnmente, los INTEL y los AMD
                </div>
              </p>
              <div className="foto-intel">
                <img src={procesador} alt="Imagen no disponible" />
              </div>
            </article>
            <article className="graficas">
              <h2 id="subt">Tarjetas gráficas</h2>
              <div id="pq">
                La tarjeta gráfica o tarjeta de vídeo de un componente que viene
                integrado en la placa base del PC o se instala a parte para
                ampliar sus capacidades. Concretamente, esta tarjeta está
                dedicada al procesamiento de datos relacionados con el vídeo y
                las imágenes que se están reproduciendo en el ordenador. <br />
                existen dos tipos de tarjetas gráficas, las que vienen
                integradas en el computador que normalmente no son tan potentes
                como el segundo tipo las cuales se conectan como una parte
                externa al PC, estas suelen ser usadas si las tareas que se van
                a realizar son muy pesadas como videojuegos, edición de video y
                fotografía.
              </div>
              <p id="parrafo" className="p2">
                <h2>Caracteristicas principales</h2>
                <dl>
                  <dt>Procesador grafico:</dt>
                  <dd>
                    <p>
                      también conocido como GPU, es el encargado de procesar
                      toda la información gráfica, realizando los cálculos
                      necesarios para obtener la imagen final.
                    </p>
                    se caracteriza por su capacidad, (expresada en MB), por su
                    velocidad de trabajo (expresada en MHz) y por el tipo.
                  </dd>
                  <dt>Memoria gráfica:</dt>
                  <dd>
                    se almacena gran parte de la información gráfica que debe
                    procesar la GPU.
                  </dd>
                </dl>
                <div id="pq" className="subp2">
                  Las marcas más conocidas de tarjetas gráficas son RADEON y
                  NVIDIA, sin embargo, con el pasar de los años se han creado
                  varias marcas que han entrado en un mercado competitivo, las
                  más famosas son:
                  <p className="ul-gra">
                    <ul>
                      <li>CORSAIR </li>
                      <li>HYPER X</li>
                      <li>NVIDIA</li>
                      <li>AMD</li>
                      <li>ASUS</li>
                      <li>MSI</li>
                    </ul>
                  </p>
                </div>
              </p>
              <div className="foto-grafica">
                <img src={grafica} alt="Imagen no disponible " />
              </div>
            </article>
            <article>
              <h2 id="subt">Memoria RAM</h2>
              <div id="pq">
                Es la memoria principal de un dispositivo, esa donde se
                almacenan de forma temporal los datos de los programas que estás
                utilizando en este momento. <br />
                Esto quiere decir que entre mayor memoria RAM tenga tu
                computador, más aplicaciones va a poder correr de forma fluida
                mientras están en segundo plano (si, entre más RAM, más ventanas
                de google podrás tener abiertas también)
              </div>
              <p id="parrafo" className="p2">
                <h2>¿Para qué sirve?</h2>
                Tu ordenador o móvil no ejecuta todas las acciones utilizando
                únicamente el disco duro, ya que si lo hiciera tardaría
                demasiado en ejecutarlas. Por eso, se utiliza un tipo de memoria
                mucho más rápida para hacer estas tareas más inmediatas, y es la
                encargada de almacenar las instrucciones de la CPU o los datos
                que las aplicaciones necesitan constantemente. Estas
                instrucciones quedan allí hasta que se apague el ordenador o
                hasta que se sustituyan por otros nuevos.
              </p>
              <div className="foto-RAM">
                <img src={RAM} alt="la concha de tu madre aqui no hay nada" />
              </div>
            </article>
          </section>
        </div>

        {/*<div className="footer">
                <FooterContainer/>
       </div>*/}
      </div>
    );
  }
}
