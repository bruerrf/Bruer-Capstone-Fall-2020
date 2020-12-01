import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "Components/navbar.js";
import OrderCompletedFill from "Components/OrderCompletedFill.js";
import Footer from "Components/footer.js";
import "./css/OrderCompleted.css";

class OrderCompleted extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
    }
    render(){
        return (
            <div className = "OrderCompletedBody">
            <Navbar currentPage="About"/>
            <OrderCompletedFill socket= {this.socket}/>
            <Footer/>
            </div>
        );
    }
}

export default OrderCompleted;