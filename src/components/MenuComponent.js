import React, { Component } from 'react';
import { Media } from 'reactstrap';
/*creating new component */
class Menu extends Component {
/*The purpose of a constructor is to create an object and set values if there are any object properties present.*/
    constructor(props) {
        /* supply props to super class */
        super(props);
/*The state stores in. Properties related to this component that we can make use of. So, inside this step here, I will define a property call this dishes. And inside 
those dishes, I'm going to define this as a JavaScript object which contains a list of dishes. */
        this.state = {
            /* In dishes property there are 4 objects and this dishes is an array of javascript objects */
            dishes: [
                {
                    id: 0,
                    name:'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                 {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                 {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
                 {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
  
            ],
        };
    }
/* render() will return the corresponding view for the component*/
    render() {
        /* defining a javascript const*/
        /*this means that I will be iterating over every dish in the dishes array here.*/
        const menu =  this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
            /* media class is going to display a list of items*/
            /* {menu} is a javascript variable which is defined above*/
            <div className="container">
                <div className="row">
                    <Media list> 
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;