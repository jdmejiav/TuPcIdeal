import React from "react";
import Registro from "./pages/Registro";
import login from "./pages/login";
import Home from "./pages/home.jsx";
import Logout from "./components/logout";
import info from "./pages/info.jsx";
import formulario from "./pages/formulario.jsx";
import formubasic from "././components/formularios/form_basico.jsx";
import formedio from "././components/formularios/form_intermedio.jsx";
import formavan from "././components/formularios/form_avan.jsx";
import NotFoundPage from "./error/NotFoundPage.jsx";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Resultados from "./pages/resultados";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/login" component={login} />
        <Route exact path="/info" component={info} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/" component={Home} />
        <Route exact path="/resultados" component={Resultados} />
        <Route exact path="/form" component={formulario} />
        <Route exact path="/formbasic" component={formubasic} />
        <Route exact path="/formmedio" component={formedio} />
        <Route exact path="/formavanzado" component={formavan} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
