import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import {FooterContainer} from '../components/footer/containers/footer'
export default class Home extends Component {
    
   render() {
       return(
            <div className="container">
                <Navbar/>
                <FooterContainer/>
            </div>
   )}
}
