import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./css/CartFill.css";

class CartFill extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
        this.socket.emit("get_product_ts", {});
        this.socket.on("get_product_tc", this.onGetProduct.bind(this));
        this.state = {"fpelements":[]};
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    onGetProduct(data){
        let rtn = [];
        let products = data.products;
        let cartItems = [];
        let total = 0;
        if (localStorage.getItem("lehloRLcart")){
            
            let cartToken = localStorage.getItem("lehloRLcart").split("|");
            for (let i = 1; i < cartToken.length; i++) {
                let cartItems = cartToken[i].split(",");
                for (let j = 0; j < products.length; j++) {
                    if (cartItems[0] == products[j]._id) {
                        let picfile = "../../Pictures/" + products[i].picfilename;
                        rtn.push(<div className = "cartList" _id = {products[i]._id}>
                            <p>{products[j].name}</p>
                            <p>{cartItems[1]}</p>
                            <p>{products[j].price}</p>
                            <input type = "button" value = "Remove from Cart" onClick={()=>{this.removeFromCart(i - 1)}}/>
                        </div>);
                        total += products[i].price;
                    }
                }
            }
            rtn.push(<div className = "total">
                <h5>Total: </h5>
                <p>{total}</p>
                </div>);
        }
        
        this.setState({"fpelements": rtn});
    }
    
    removeFromCart(n) {
        let item = this.state.fpelements[n];
        console.log(item);
        let rtn;
        if (item) {
            rtn = this.state.fpelements.splice(n - 1, 1);
        }
        let cartItems = [];
        let newCartItems = [];
        if (localStorage.getItem("lehloRLcart")){
            
            let cartToken = localStorage.getItem("lehloRLcart").split("|");
            for (let i = 1; i < cartToken.length; i++) {
                let cartItems = cartToken[i].split(",");
                if (cartItems[0] != item.props._id) {
                    newCartItems.push(cartToken[i]);
                }
            }
            localStorage.setItem("lehloRLcart", newCartItems.join("|"));
            this.setState({"fpelements": rtn});
        }
        
    }
    
    render(){
        return (
            <div className = "container5">
                <h3>Cart</h3>
                <div className = "orderSummary">
                    <h4>Order Summary</h4>
                    <h5>Items:</h5>
                    {this.state.fpelements}
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