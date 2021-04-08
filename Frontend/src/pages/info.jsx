import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import {FooterContainer} from '../components/footer/containers/footer'
import Info from '../images/rayzen20.jpg';

export default class info extends Component {

   render() {
       return(
            <div className='container_info'>
                <Navbar/>
                <h1 className="titulo_info">
                    Información sobre computadores
                </h1>
                <div>
                   <article >
                       <section className="procesadores">
                            <h2 className="subt1"> Procesadores</h2>
                            <p>El procesador es el cerebro del sistema, justamente procesa todo lo que ocurre en la PC y ejecuta todas las acciones que existen. Cuanto más rápido sea el procesador que tiene una computadora, más rápidamente se ejecutarán las órdenes que se le den a la máquina.

Fuente: https://concepto.de/procesador/#ixzz6rJU1CKgL</p>
<p className="p2">
    probando probando
</p>
                       </section>
                   </article>
                   <article>

                   </article>
                   <article>

                   </article>
                </div>
                <FooterContainer/>
            </div>





   )}
}
