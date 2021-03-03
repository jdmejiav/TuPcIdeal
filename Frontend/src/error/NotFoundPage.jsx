import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PageNotFound from '../images/404.png';


export default class NotFoundPage extends Component{
    render(){
        return( 
        <div>
          <img src={PageNotFound} className="PC"  />
          <p style={{textAlign:"center"}}>
            <Link to="/">Go to Home</Link>
          </p>
        </div>
        )
    }
}
