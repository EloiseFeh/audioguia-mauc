import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import { Menu } from './components/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Language from './pages/language';
import Search from './pages/search';
import About from './pages/about';
import Contact from './pages/contact';
import Player from './pages/audio';
import i18next from "i18next";
import './i18n';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});


ReactDOM.render(
          
   
  <Router>
     
  <Switch>
    <Route path='/' exact={true} component={Language}/>
    <Route path='/busca' component={Search} />
    <Route path='/sobre' component={About} />
    <Route path='/contato' component={Contact} />
    <Route path="/audio/:key" component={ Player } />

  </Switch>
  <Menu/>
  </Router>,
  document.getElementById('root')
);
