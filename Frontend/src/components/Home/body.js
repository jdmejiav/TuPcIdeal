import {Component} from 'react'
import './body.css'
import pc from '../../images/imgPc.png'
export default class Body extends Component{

    render(){
        return(
            <div className="body">  
                <div className="cuadrado">
                    <h1 className="home-logo">TuPCIdeal.com<i className="far fa-lightbulb"></i></h1>
                    <div className="texto-home"><p >
                        Déjanos ayudarte en el proceso de encontrar TuPcIdeal para que puedas encontrar el computador que mejor se adapte a tus necesidades y al mejor precio.
                        ¡Regístrate Ahora!
                    </p></div>
                    <img src={pc} className="img-pc-home"/>
                    <a className="btn-registro" href="/registro">Registro</a>
                </div>
            </div>   
        )

    }
    


}