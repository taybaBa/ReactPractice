import React, { Component } from "react";
 
import 'bootstrap/dist/css/bootstrap.min.css';
  
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, About, Contact } from "./components";
 import  Portfolio from './components/Portfolio.jsx'
 import Login from   './components/Login.js'
 import SignUp from './components/Home'
 import ContactForm from './components/contactForm';
 import "semantic-ui-css/semantic.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/signup" exact component={() => <SignUp />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/portfolio" exact component={() => <Portfolio />} />
          {/* <Route path="/contactRegister" exact component={() => <ContactRegister />} /> */}
          <Route path="/" exact component={() => <ContactForm />} />
          
        </Switch>
        <Footer />
      </Router>
     
      </div>
    )}}
 
 
export default App;