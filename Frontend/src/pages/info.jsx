import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import {FooterContainer} from '../components/footer/containers/footer'

export default class info extends Component {

   render() {
       return(
            <div>
                <Navbar/>
                <h1 className="titulo_info">
                    Información sobre computadores
                </h1>
                <div>
                   <article className="procesador">
                    
                   </article>
                </div>
                <FooterContainer/>
            </div> 
            
            


            
   )}
}