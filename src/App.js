import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from "reactstrap"; //react implementation of bootstrap
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
/* now my state information that contains all the dishes is now lifted into the App.js file. I can make this available to the menu component through props from the App.js file. */
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
       <div>
       <Navbar dark color="primary">
           <div className="container">
            <NavbarBrand href="/">
            Ristorante Con Fusion
            </NavbarBrand>
           </div>
       </Navbar>
       <Menu dishes={this.state.dishes} />
       </div>
       /*make those dishes available as props to the menu component*/
    );
  }
}

export default App;