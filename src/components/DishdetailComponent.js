import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props) {
        super(props);
    }


    renderDish(dish){
        if(dish!=null){
             return( <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
           </Card>);
        } else {
            return <div></div>;
        }
    }

    renderComments(comments){
        const getComments = comments.map((comment) => {
            return (
                <div key={comment.id} >
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {comment.date}.</li>
                    </ul>
                </div>
            )
        })
    
        return (
            <div>
                <h4 className="h4">Comments</h4>
                {getComments}
            </div>
        )
    }

    render(){

        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        </div>
        );
    }
}

export default DishDetail;