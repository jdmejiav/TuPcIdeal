
import React from 'react';
import Registro from './pages/Registro';
<<<<<<< HEAD
import login from './pages/login';
import Main from './pages/mainpage.jsx'
=======
import Main from './pages/mainpage.jsx';
>>>>>>> 7815d07fb82b7efe0379bd7fbb8d71c0dfa58744
import NotFoundPage from './error/NotFoundPage.jsx';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/registro' component={Registro} />
<<<<<<< HEAD
          <Route exact path='/login' component={login} />
          <Route exact path='/' component={Main} />
          <Route path="*" component={NotFoundPage} />
=======
          <Route path="/home" component={Main} />
          <Route exact path='/' component={Home} />
          <Route path="*" component={NotFoundPage} />         
>>>>>>> 7815d07fb82b7efe0379bd7fbb8d71c0dfa58744
      </Switch>
    </BrowserRouter>
  
  );
}
export default App;
