import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import { Menu } from './components/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buscar from './pages/buscar';
import Sobre from './pages/sobre';
import Contato from './pages/contato';

ReactDOM.render(
  <Router>
     
  <Switch>
    <Route path='/' exact={true} component={Buscar}/>
    <Route path='/sobre' component={Sobre} />
    <Route path='/contato' component={Contato} />
    

  </Switch>
  <Menu/>
  </Router>,
  document.getElementById('root')
);
