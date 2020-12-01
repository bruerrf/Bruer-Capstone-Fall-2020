import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "Components/navbar.js";
import CartFill from "Components/CartFill.js";
import Footer from "Components/footer.js";
import "./css/Cart.css";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
    }
    render(){
        return (
            <div className = "cartBody">
            <Navbar currentPage="About"/>
            <CartFill socket= {this.socket}/>
            <Footer/>
            </div>
        );
    }
}

export default Cart;