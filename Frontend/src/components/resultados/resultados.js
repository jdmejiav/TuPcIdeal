import React from 'react'

import './resultados.css'


export default  class Body extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {   
            "url":"https://falabella.scene7.com/is/image/FalabellaCO/9463560?wid=240&hei=240&qlt=70",
            "Procesador":"Core i9 10900K",
            "Gráfica":"Nvidia RTX 3090",
            "Descripción":"Computador ideal para realizar tareas pesadas la cual nos especificaste que requerías con una unidad de estado solido dando rapidez a los programas y un procesador i5 ideal para las tareas y usos que nos indicaste. Selecciona el pc que mejor se te acomode a tu presupuesto, recuerda que algunos resultados pueden ser bastante similares donde la memoria ram o capacidad seran mayor o menor en cada producto.",
            "urlprod":"https://www.falabella.com.co/falabella-co/product/9463560/Portatil-Lenovo-YogaSlim7-14-pulgadas-Intel-Core-i7-8GB-256GB/9463560",

        }

    }

    /*componentDidMount(){
        axios.get("http://localhost:8000/post").then(res =>{
            alert(res)
             this.setState(res.data)
        })
    }*/

    
    URL = (key)=>{
        if (key=="urlprod"){
            return(
                <div>
                    <p>URL : </p>
                    <a href={this.state[key]}>{this.state[key]}</a>
                </div>
                
            )
        }
        return (
                <div>
                    <p>{key} : {this.state[key]}</p>
                    <hr></hr>
                 </div>
        )
    
    }
    
    render(){
        return(
            <div className= "body-container-resultados">
                <div className="box-recomendacion1">
                <h1>Mejor opción</h1>
                {
                    Object.keys(this.state).map((key)=>{                        
                        return(
                            <div className="box-info"> 
                                {key=="url" ? 
                                    <div>
                                        <img src={this.state[key]}/>
                                        <hr/>
                                    </div>
                                :
                                    <div>
                                        {this.URL(key)}
                                    </div>   
                                }
                            </div>
                        )
                        
                    })
                }
             
                </div>

                <div className="box-recomendacion2">
                <h1>Segunda Opción</h1>
                {
                    Object.keys(this.state).map((key)=>{                        
                        
                        return(
                            
                            <div className="box-info2"> 
                                {key=="url"
                                ?   
                                <div>
                                    <img src={this.state[key]}/>
                                    <hr/>
                                </div>
                                       
                                    
                                :
                                    
                                    <div>
                                        {this.URL(key)}
                                    </div>
                                }
                            </div>
                        )
                        
                    })
                }
             
                </div>
            
            </div>

        )
        
        

    }

}

