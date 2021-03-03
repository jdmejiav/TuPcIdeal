
import React from 'react';
import Registro from './pages/Registro';
import Main from './pages/mainpage.jsx'
import NotFoundPage from './error/NotFoundPage.jsx';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/' component={Main} />
          <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  
  );
}
export default App;
