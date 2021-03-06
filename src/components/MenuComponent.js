import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component{

    constructor(props) {
        super(props);
        
          // State stores properties realted to the component that are stored there
        this.state = { 
           selectedDish: null
        }
    }

    onDishSelect(dish){
        this.setState({
            selectedDish : dish
        });
    }

    rednerDish(dish){
        if ( dish != null){
            return(
                <Card>
                    <CardImg width="100%" object src = {dish.image} alt = {dish.name} />
                    <CardBody> 
                        <CardTitle>  {dish.name}   </CardTitle>
                        <CardText>  {dish.description} </CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div> </div>
            )
        }
    }

    render(){
        //Java Script Constant
        
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                    <Card onClick ={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" object src = {dish.image} alt = {dish.name} />
                        <CardImgOverlay>
                            <CardTitle>  
                                {dish.name} 
                            </CardTitle>
                         </CardImgOverlay>
                    </Card>
                </div>
            );

        });  

        return (
                <div className = "container">
                    <div className = "row">
                      {menu}
                    </div>
                    <div className = "row">
                        {this.rednerDish(this.state.selectedDish)}
                    </div>
                </div>
        );
    }
}

export default Menu;


