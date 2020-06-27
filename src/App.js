import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from "reactstrap"; //react implementation of bootstrap

class App extends Component {
  render() {
    return (
       <div >
       <Navbar dark color="primary">
           <div className="container">
            <NavbarBrand href="/">
            Ristorante Con Fusion
            </NavbarBrand>
           </div>
       </Navbar>
       </div>
    );
  }
}

export default App;