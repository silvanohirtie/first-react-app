import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './components/Header'
import Home from './views/Home'
import About from './views/About'
import Product from './views/Product'
function App() {
  
  return (
    <div className="relative pb-10">
  <Router>
     <Header />
     <br />
     <Switch>
      <Route exact path="/">
        <Home />
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/products/:id">
        <Product />
        </Route>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
