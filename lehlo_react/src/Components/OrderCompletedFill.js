import React from 'react';
import ReactDOM from 'react-dom';
import "./css/OrderCompletedFill.css";

class OrderCompletedFill extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
        this.state = {"cart":[]};
    }
    componentDidMount() {
        let cartToken = JSON.parse(localStorage.getItem("lehloRLcart"));
        let cartArray = cartToken.data;
        let newCartItems = [];
        let total = 0;
        for (let i = 0; i < cartArray.length; i++) {
                let cartItem = cartArray[i];
                newCartItems.push(<div className = "cartList" _id = {cartItem._id}>
                        <p>{cartItem.name}</p>
                        <p>{cartItem.size}</p>
                        <p>{cartItem.price}</p>
                    </div>);
                    total += cartItem.price;
        }
            
        newCartItems.push(<div className = "total">
            <h5>Total: </h5>
            <p>{total}</p>
            </div>);
        localStorage.setItem("lehloRLcart", "");
        this.setState({"cart":newCartItems});
    }
   
    
    
    
    render(){
        
        return (
            <div className = "checkoutContainer">
                <h3>Order Success!</h3>
                <div className = "orderSummary">
                    <h4>Order Summary</h4>
                    {this.state.cart}
                </div>
            </div>

        );
    }
}



export default OrderCompletedFill;