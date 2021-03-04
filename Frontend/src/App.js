
import React from 'react';
import Registro from './pages/Registro';
import Main from './pages/mainpage.jsx';
import NotFoundPage from './error/NotFoundPage.jsx';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/registro' component={Registro} />
          <Route path="/home" component={Main} />
          <Route exact path='/' component={Home} />
          <Route path="*" component={NotFoundPage} />         
      </Switch>
    </BrowserRouter>
  
  );
}
export default App;
