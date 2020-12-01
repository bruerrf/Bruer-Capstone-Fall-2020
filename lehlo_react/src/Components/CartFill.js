import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./css/CartFill.css";

class CartFill extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
        this.state = {"fpelements":[]};
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    
    removeFromCart(n) {
        let newCartItems = [];
        if (localStorage.getItem("lehloRLcart")){
            
            let cartToken = JSON.parse(localStorage.getItem("lehloRLcart"));
            let cartArray = cartToken.data;
            for (let i = 0; i < cartArray.length; i++) {
                let cartItem = cartArray[i];
                if (cartItem._id != n) {
                    newCartItems.push(cartItem);
                }
            }
            localStorage.setItem("lehloRLcart", JSON.stringify({"data":newCartItems}));
            this.setState({"fpelements":!this.state.fpelements});
        }
        
    }
    
    render(){
        let newCartItems = [];
        if (localStorage.getItem("lehloRLcart") != "") {
            let cartToken = JSON.parse(localStorage.getItem("lehloRLcart"));
            let cartArray = cartToken.data;

            let total = 0;
            for (let i = 0; i < cartArray.length; i++) {
                    let cartItem = cartArray[i];
                    newCartItems.push(<div className = "cartList" _id = {cartItem._id}>
                            <p>{cartItem.name}</p>
                            <p>{cartItem.size}</p>
                            <p>{cartItem.price}</p>
                            <input type = "button" value = "Remove from Cart" onClick={()=>{this.removeFromCart(cartItem._id)}}/>
                        </div>);
                        total += cartItem.price;
                }
                newCartItems.push(<div className = "total">
                    <h5>Total: </h5>
                    <p>{total}</p>
                    </div>);
        }
        return (
            <div className = "container5">
                <h3>Cart</h3>
                <div className = "orderSummary">
                    <h4>Order Summary</h4>
                    <h5>Items:</h5>
                    {newCartItems}
                    <Link to="/checkout">
                        <button type = "button">
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>

        );
    }
    
}



export default CartFill;