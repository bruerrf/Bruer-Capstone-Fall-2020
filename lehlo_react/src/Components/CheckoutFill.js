import React from 'react';
import ReactDOM from 'react-dom';
import "./css/CheckoutFill.css";

class CheckoutFill extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
        this.socket.emit("get_product_ts", {});
        this.socket.on("get_product_tc", this.onGetProduct.bind(this));
        this.state = {"fpelements":[]};
        this.state = {"secretfpelements":[]};
        this.submitOrder = this.submitOrder.bind(this);
    }
    onGetProduct(data){
        let rtn = [];
        let secretRtn = [];
        let products = data.products;
        let cartItems = [];
        let total = 0;
        rtn.push(<h5>Items:</h5>);
        if (localStorage.getItem("lehloRLcart")){
            
            let cartToken = localStorage.getItem("lehloRLcart").split("|");
            for (let i = 1; i < cartToken.length; i++) {
                let cartItems = cartToken[i].split(",");
                for (let i = 0; i < products.length; i++) {
                    if (cartItems[0] == products[i]._id) {
                        let picfile = "../../Pictures/" + products[i].picfilename;
                        rtn.push(<div className = "checkoutList">
                            <p>{products[i].name}</p>
                            <p>{cartItems[1]}</p>
                            <p>{products[i].price}</p>
                        </div>);
                        secretRtn.push(cartItems[0] + " " + cartItems[1]);
                        total += products[i].price;
                    }
                }
            }
            rtn.push(<div className = "checkoutTotal">
                <h5>Total:</h5>
                <p>{total}</p>
                </div>);
        }
        
        this.setState({"fpelements": rtn});
        this.setState({"secretfpelements": secretRtn});
    }
    
    
    
    render(){
        return (
            <div className = "checkoutContainer">
                <h3>Checkout</h3>
                <div className = "shipping">
                    <h4>Shipping & Contact Information</h4>
                    <form className = "shippingInfo">
                        <label for="name" className = "checkoutLabels">Name:</label>
                        <input type="text" id="name" name = "name"/><br/>
                        <label for="email" className = "checkoutLabels">e-Mail Address:</label>
                        <input type="text" id="email" name = "email"/><br/>
                        <label for="address">Address:</label>
                        <input type = "text" id = "address" name = "address"/><br/>
                        <label for="address2">Address Line 2:</label>
                        <input type = "text" id = "address2" name = "address2"/><br/>
                        <label for="city">City:</label>
                        <input type = "text" id = "city" name = "city"/>
                        <label for="state">State:</label>
                        <input type = "text" id = "state" name = "state"/>
                        <label for="zip">Zip:</label>
                        <input type = "text" id = "zip" name = "zip"/>
                    </form>
                </div>
                <div className = "payment">
                    <h4>Payment Information</h4>
                    <form className = "shippingInfo">
                        <label for="shippingName">Name:</label>
                        <input type="text" id="shippingName" name = "shippingName"/><br/>
                        <label for="paypalUsername">PayPal Username:</label>
                        <input type="text" id="paypalUsername" name = "paypalUsername"/>
                    </form>
                </div>
                <div className = "orderSummary">
                    <h4>Order Summary</h4>
                    {this.state.fpelements}
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
        rtn.orderSummary = this.state.secretfpelements
        this.socket.emit("submit_order", rtn);
         
    }
}



export default CheckoutFill;