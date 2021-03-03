import React, { Component } from 'react'
import Registro from './Registro'


export default class Home extends Component {
    
   render() {
       return(
            <div className="container">
                <h1>MAIN PAGE</h1>
                <Registro /> 
            </div>
   )}
}
