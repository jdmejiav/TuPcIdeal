import React from "react";
import "./resultados.css";
import axiosInstance from "../../axios";


export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: JSON.parse(localStorage.getItem("formResult")),
      thereIsResponse: false,
      answer1: {},
      answer2: {},
      thereIsAnswer: false,
    };
  }
  componentDidMount() {
    if (this.state.form["tipof"] == "0") {
      axiosInstance
        .post(`/form/basic/`, {
          Presupuesto: this.state.form["Presupuesto"],
          Tipo: this.state.form["Tipo"],
          Marca: this.state.form["Marca"],
          Usos: this.state.form["Usos"],
          Pantalla: this.state.form["Pantalla"],
        })
        .then((response) => {
          if (response.data[0] != null) {
            this.setState({ answer1: response.data[0] });
          } else {
            this.setState({
              answer: {
                "Error":
                  "Lo sentimos, no encontramos un computador que de solución a sus necesidades",
              },
            });
          }
          if (response.data[1] != null) {
            this.setState({ answer2: response.data[1] });
          } else {
            this.setState({
              answer2: {
                "Error":
                  "Lo sentimos, no encontramos un segundo computador que de solución a sus necesidades",
              },
            });
          }
          this.setState({ thereIsAnswer: true });
          console.log(JSON.stringify(response.data[0]));
        });
    } else if (this.state.form["tipof"] == "1") {
      axiosInstance
        .post(`/form/intermediate/`, {
          Presupuesto: this.state.form["Presupuesto"],
          Tipo: this.state.form["Tipo"],
          Marca: this.state.form["Marca"],
          Usos: this.state.form["Usos"],
          Pantalla: this.state.form["Pantalla"],
          Memoria: this.state.form["Memoria"],
          Solido: this.state.form["Solido"],
        })
        .then((response) => {
          if (response.data[0] != null) {
            this.setState({ answer1: response.data[0] });
          } else {
            this.setState({
              answer: {
                "Error":
                  "Lo sentimos, no encontramos un computador que de solución a sus necesidades",
              },
            });
          }
          if (response.data[1] != null) {
            this.setState({ answer2: response.data[1] });
          } else {
            this.setState({
              answer2: {
                "Error":
                  "Lo sentimos, no encontramos un segundo computador que de solución a sus necesidades",
              },
            });
          }
          this.setState({ thereIsAnswer: true });
          console.log(JSON.stringify(response.data[0]));
          //alert(this.state.answer)
          //this.state.form = localStorage.setItem("formResult", JSON.stringify((response.data[0])));
          //window.location.reload();
        });
    } else if (this.state.form["tipof"] == "2") {
      axiosInstance
        .post(`/form/avanzado/`, {
          Presupuesto: this.state.form["Presupuesto"],
          Tipo: this.state.form["Tipo"],
          Marca: this.state.form["Marca"],
          Usos: this.state.form["Usos"],
          Pantalla: this.state.form["Pantalla"],
          Memoria: this.state.form["Memoria"],
          Solido: this.state.form["Solido"],
          Almacenamiento: this.state.form["Almacenamiento"],
          Gama: this.state.form["Gama"],
        })
        .then((response) => {
          if (response.data[0] != null) {
            this.setState({ answer1: response.data[0] });
          } else {
            this.setState({
              answer: {
                "Error":
                  "Lo sentimos, no encontramos un computador que de solución a sus necesidades",
              },
            });
          }
          if (response.data[1] != null) {
            this.setState({ answer2: response.data[1] });
          } else {
            this.setState({
              answer2: {
                "Error": "Lo sentimos, no encontramos un segundo computador que de solución a sus necesidades",
              },
            });
          }
          this.setState({ thereIsAnswer: true });
          console.log(JSON.stringify(response.data[0]));
          //window.location.reload();
        });
    }
  }
  URL = (key) => {
    if (key == "Spantalla"){
      return (
        <div>
          <p>
            Pantalla : {this.state.answer1[key]}"
          </p>

        </div>
      )
    }
    
    if (key == "Precio") {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'COP',
      });

      return (
        <div>
          <p>{key} : </p>
          <p style={{"color":"#AE3434"}}>
             {formatter.format(this.state.answer1[key])}$
          </p>
	<hr></hr>
        </div>
      );

    }
    

    if (key == "url") {
      return (
        <div>
          <p>URL : </p>
          <a href={this.state.answer1[key]}>{this.state.answer1[key]}</a>
        </div>
      );
    }
    return (
      <div>
        <p>
          {key} : {this.state.answer1[key]}
        </p>
        <hr></hr>
      </div>
    );
  };


  URL2 = (key) => {
    if (key == "Spantalla"){
      return (
        <div>
          <p>
            Pantalla : {this.state.answer2[key]}"
          </p>
        </div>
      )
    }

    
    if (key == "Precio") {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'COP',
      });

      return (
        <div>
          <p>{key} : </p>
          <p>
             {formatter.format(this.state.answer2[key])}$
          </p>
    	<hr></hr>
        </div>
      );
    }
    if (key == "url") {
      return (
        <div>
          <p>URL : </p>
          <a href={this.state.answer2[key]}>{this.state.answer2[key]}</a>
        </div>
      );
    }
    return (
      <div>
        <p>
          {key} : {this.state.answer2[key]}
        </p>
        <hr></hr>
      </div>
    );
  };

  USOS = (key) => {
    if (key == "Usos" || key == "Marca" || key == "Presupuesto") {
      if (key=="Presupuesto"){
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'COP',
        });

        return (
          <div>
            <p>{key} : </p>
            {this.state.form[key].map((key2) => (
              <div>{formatter.format(key2)}$</div>
            ))}
            <hr />
          </div>
        );


      }
      
      
      return (
        <div>
          <p>{key} : </p>
          {this.state.form[key].map((key2) => (
            <div>{key2}</div>
          ))}
          <hr />
        </div>
      );
    };
    return (
      <div>
        <p>
          {key} : {this.state.form[key]}
        </p>
        <hr></hr>
      </div>
    );
  };

  render(){
    return (
      <div>
        {this.state.thereIsAnswer ? (
          <div className="body-container-resultados">
            <div className="box-recomendacion1">
              <h1>Mejor opción</h1>
              {Object.keys(this.state.answer1).map((key) => {
                return (
                  <div className="box-info">
                    {key == "urli" ? (
                      <div>
                        <img className="img1" src={this.state.answer1[key]} />
                        <hr />
                      </div>
                    ) : (
                      <div>{this.URL(key)}</div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="box-recomendacion2">
              <h1>Segunda Opción</h1>
              {Object.keys(this.state.answer2).map((key) => {
                return (
                  <div className="box-info2">
                    {key == "urli" ? (
                      <div>
                        <img src={this.state.answer2[key]} />
                        <hr />
                      </div>
                    ) : (
                      <div>{this.URL2(key)}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <div className="body-container-resultados">
              <div className="box-formulario">
                <h1>Espera mientras encontramos TuPCIdeal</h1>
                <p className="texto-titulo">
                  Acá están tus respuestas al formulario
                </p>
                {Object.keys(this.state.form).map((key) => {
                  return (
                    <div className="box-info">
                      {key == "tipof" ? (
                        <div></div>
                      ) : (
                        <div>{this.USOS(key)}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
