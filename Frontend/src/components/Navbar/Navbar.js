import { Component } from "react";
import { MenuItems, MenuItems2 } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
  }
  state = {
    clicked: false,
  };

  render() {
    const islogin = localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null;
    if (islogin) {
      return (
        <nav className="NavbarItems">
          <a className="btn-tupcideal" href="/">
            <h1 className="navbar-logo">
              TuPCIdeal.com<i className="far fa-lightbulb"></i>
            </h1>
          </a>

          <ul className="nav-menu-logout">
            <a className="btn-home" href="/">
              <i className="fas fa-home fa-lg"></i>
            </a>
            {MenuItems2.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.tittle}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="NavbarItems">
          <a className="btn-tupcideal" href="/">
            <h1 className="navbar-logo">
              TuPCIdeal.com<i className="far fa-lightbulb"></i>
            </h1>
          </a>

          <ul className="nav-menu">
            <a className="btn-home" href="/">
              <i className="fas fa-home fa-lg"></i>
            </a>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.tittle}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;
