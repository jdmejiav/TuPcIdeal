import React from 'react'
import Footer from '../'
import { Link, Tittle } from '../styles/footer'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                    <h1 className="footbar-logo">TuPCIdeal.com<i className="far fa-lightbulb"></i></h1>            
                    </Footer.Column>
                    <Footer.Column>
                        <Tittle>
                            Sobre el proyecto
                        </Tittle>
                        <Link href='https://dev.azure.com/Proyectointegrador1G2/ProyectoIntegradorI'>
                            Documentación
                        </Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Tittle>
                            Links de Interés
                        </Tittle>
                            <Link>
                                Partes computador
                            </Link>
                            <Link>
                                Funcionamiento computador
                            </Link>
                    </Footer.Column>

                </Footer.Row>
                    
            
            </Footer.Wrapper>
        </Footer>
    )
}