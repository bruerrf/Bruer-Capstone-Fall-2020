import React from 'react';
import ReactDOM from 'react-dom';
import "./css/CheckoutFill.css";

class CheckoutFill extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
        this.state = {"fpelements":[]};
        this.state = {"secretfpelements":[]};
        this.submitOrder = this.submitOrder.bind(this);
    }
    
    
    
    render(){
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
        return (
            <div className = "checkoutContainer">
                <h3>Checkout</h3>
                <div className = "shipping">
                    <h4>Shipping & Contact Information</h4>
                    <form className = "shippingInfo">
                        <div className = "label">
                            <label for="name" className = "checkoutLabels">Name:</label>
                            <input type="text" id="name" name = "name"/><br/>
                        </div>
                        <div className = "label">
                            <label for="email" className = "checkoutLabels">e-Mail Address:</label>
                            <input type="text" id="email" name = "email"/><br/>
                        </div>
                        <div className = "label">
                            <label for="address">Address:</label>
                            <input type = "text" id = "address" name = "address"/><br/>
                        </div>
                        <div className = "label">
                            <label for="address2">Address Line 2:</label>
                            <input type = "text" id = "address2" name = "address2"/><br/>
                        </div>
                        <div className = "label">
                            <label for="city">City:</label>
                            <input type = "text" id = "city" name = "city"/>
                        </div>
                        <div className = "label">
                            <label for="state">State:</label>
                            <input type = "text" id = "state" name = "state"/>
                        </div>
                        <div className = "label">
                            <label for="zip">Zip:</label>
                            <input type = "text" id = "zip" name = "zip"/>
                        </div>
                    </form>
                </div>
                <div className = "payment">
                    <h4>Payment Information</h4>
                    <form className = "shippingInfo">
                        <div className = "label">
                            <label for="shippingName">Name:</label>
                            <input type="text" id="shippingName" name = "shippingName"/><br/>
                        </div>
                        <div className = "label">
                            <label for="paypalUsername">PayPal Username:</label>
                            <input type="text" id="paypalUsername" name = "paypalUsername"/>
                        </div>
                    </form>
                </div>
                <div className = "orderSummary">
                    <h4>Order Summary</h4>
                    {newCartItems}
                    <input type = "button" value = "Submit Order" onClick={()=>{this.submitOrder()}}/>
                </div>
            </div>

        );
    }
    
    submitOrder() {
        let rtn = {};
        rtn.orderName = document.getElementById("name").value;
        rtn.orderEmail = document.getElementById("email").value;
        rtn.orderAddress = document.getElementById("address").value;
        rtn.orderAddress2 = document.getElementById("address2").value;
        rtn.orderCity = document.getElementById("city").value;
        rtn.orderState = document.getElementById("state").value;
        rtn.orderZip = document.getElementById("zip").value;
        rtn.orderShippingName = document.getElementById("shippingName").value;
        rtn.orderpaypalUsername = document.getElementById("paypalUsername").value;
        let cartToken = JSON.parse(localStorage.getItem("lehloRLcart"));
        let cartArray = cartToken.data;
        rtn.orderSummary = cartArray;
        this.socket.emit("submit_order", rtn);
        window.location.pathname = "/orderCompleted";
         
    }
}



export default CheckoutFill;