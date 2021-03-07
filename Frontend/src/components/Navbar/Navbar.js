import react, {Component} from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css'
import {Button} from "../Button"

class Navbar extends Component{
    
    state={
        clicked: false
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">TuPCIdeal.com<i className="far fa-lightbulb"></i></h1>                


                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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