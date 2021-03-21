import {Component} from 'react'
import {MenuItems} from './MenuItems';
import './Navbar.css'

class Navbar extends Component{

    state={
        clicked: false
    }

    render(){
        return(
            <nav className="NavbarItems">
                <a className="btn-tupcideal" href="/"><h1 className="navbar-logo">TuPCIdeal.com<i className="far fa-lightbulb"></i></h1></a>
                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

            
                    <a className="btn-home" href="/"><i className="fas fa-home fa-lg"></i></a>
                    {
                        MenuItems.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.tittle}
                                    </a>
                                </li>
                            )
                        })

                    }
                </ul>
            </nav>
        )
    }
}

export default Navbar
