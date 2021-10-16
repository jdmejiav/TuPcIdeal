import { Component } from "react";
import { Link } from "react-router-dom";
import "./body.css";
import pc from "../../images/imgPc.png";


export default class Body extends Component {
  constructor(){
    super();
    this.state={ islogin : 
      localStorage.getItem("access_token")
    }
  }
  render() {
    

    return (
      <div className="body">
        <div className="cuadrado">
          <h1 className="home-logo">
            TuPCIdeal.com<i className="far fa-lightbulb"></i>
          </h1>
          <div className="texto-home">
            
          { this.state.islogin ? 
            <p>
              Déjanos ayudarte en el proceso de encontrar TuPcIdeal para que
              puedas encontrar el computador que mejor se adapte a tus
              necesidades y al mejor precio. ¡Encuéntralo ahora!
            </p> :
            <p>
              Déjanos ayudarte en el proceso de encontrar TuPcIdeal para que
              puedas encontrar el computador que mejor se adapte a tus
              necesidades y al mejor precio. ¡Regístrate Ahora!
            </p>
         }
          </div>
          <img src={pc} className="img-pc-home" />
          
          {this.state.islogin ?<Link to="/form" className="btn-registro">
            Formulario
          </Link> :
          <Link to="/registro" className="btn-registro">
            Sign up
          </Link>
          
         }
          
        </div>
      </div>
    );
  }
}
