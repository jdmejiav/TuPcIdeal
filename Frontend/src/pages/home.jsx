import React, { Component } from 'react'

import Navbar from '../components/Navbar/Navbar'
import Registro from './Registro'

export default class Home extends Component {
    
   render() {
       return(
            <div className="container">

                <Navbar/>
                <Registro/>
            </div>
   )}
}
