import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import {FooterContainer} from '../components/footer/containers/footer'
import Info from '../images/rayzen20.jpg';

export default class info extends Component {

   render() {
       return(
            <div className='container'>
                <Navbar/>
                <h1 className="titulo_info">
                    Información sobre computadores
                </h1>
                <div>
                   <article >
                       <section className="rayzen_R7">
                       <h2 className="procesador">Procesador AMD RYZEN 7 </h2>
                       <div className="foto_rayzen">
                            <img className="foot_rayzen" src={Info} className="login"  />
                       </div>
                       <time datetime="21/01/2021">Publicado el 12/03/2021</time>
                       <div className="par_ry">
                       <p>
                           Caracterticas:
                            <ul>
                                <li>Memoria RAM: 8GB </li>
                                <li>Tamaño de pantalla: 14 pulgadas</li>
                                <li>Disco duro HDD: No aplica</li>
                                <li>Unidad de estado sólido SSD: 256GB</li>
                            </ul>
                       </p>
                       </div>
                       </section>
                   </article>
                </div>
                <FooterContainer/>
            </div>





   )}
}
