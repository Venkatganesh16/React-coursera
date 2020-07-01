import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
/*creating new component */
class Menu extends Component {
/*The purpose of a constructor is to create an object and set values if there are any object properties present.*/
    constructor(props) {
        /* supply props to super class */
        super(props);
/* Each component can store its local information in its "state" private and fully controlled by the component */
/* can be passed as props to children */
        this.state = {
/*no longer need the dishes in the state of the menu component, because I am receiving that as props from my parent, which is the App component*/
/* now the dishes array copied to shared folder so that it can be used in other components also */          
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>    
                    <CardText>{dish.description}</CardText>
                  </CardBody>  
                </Card>
            );
        }
        else {
            return(
                <div></div>  
            );
        }
    }
/* render() will return the corresponding view for the component*/
    render() {
        /* defining a javascript const*/
        /*this means that I will be iterating over every dish in the dishes array here.*/
        /* this.state.dishes.map changed to this.props.dishes.map so it can fetch the dishes array from my parent */
        const menu =  this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            /* media class is going to display a list of items*/
            /* {menu} is a javascript variable which is defined above*/
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;