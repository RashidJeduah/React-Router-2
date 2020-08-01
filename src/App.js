import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Aboutus from './components/aboutus';
import Contacts from './components/contacts';
import Services from './components/services';
import Portfolio from './components/portfolio';


function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/aboutus'>Aboutus</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/services'>Services</Link>
      <Link to='/portfolio'>Portfolio</Link>

      <Route path= '/' exact component= {Home}/>
      <Route path= '/aboutus' exact component= {Aboutus}/>
      <Route path= '/contacts' exact component= {Contacts}/>
      <Route path= '/services' exact component= {Services}/>
      <Route path= '/portfolio' exact component= {Portfolio}/>
    </Router>
    
  );
}

export default App;
