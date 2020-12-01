import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "Components/navbar.js";
import CheckoutFill from "Components/CheckoutFill.js";
import Footer from "Components/footer.js";
import "./css/Checkout.css";

class Checkout extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
    }
    render(){
        return (
            <div className = "checkoutBody">
            <Navbar currentPage="About"/>
            <CheckoutFill socket= {this.socket}/>
            <Footer/>
            </div>
        );
    }
}

export default Checkout;