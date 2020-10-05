import React, { Component } from "react";
 
import 'bootstrap/dist/css/bootstrap.min.css';
  
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
 import  Portfolio from './components/Portfolio.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/portfolio" exact component={() => <Portfolio />} />
        </Switch>
        <Footer />
      </Router>
     
      </div>
    )}}
 
 
export default App;