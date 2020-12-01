import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "Pages/Home.js";
import StorePage from "Pages/Store.js";
import BlogPage from "Pages/BlogPage.js";
import ProductDetail from "Pages/ProductDetail.js";
import Checkout from "Pages/Checkout.js";
import About from "Pages/About.js";
import Guides from "Pages/Guides.js";
import Cart from "Pages/Cart.js";
import OrderCompleted from "Pages/OrderCompleted.js";
import openSocket from 'socket.io-client';


class App extends React.Component {
    constructor(props){
        super(props);
        this.socket = openSocket("http://localhost:3000/");
        
    }
    render(){
        return (
            <Switch>
                <Route path="/" render={(props) => (
                    <HomePage socket={this.socket} />
                )} exact/>
                <Route path="/store" render={(props) => (
                    <StorePage socket={this.socket} />
                )}/>
                <Route path="/blog" render={(props) => (
                    <BlogPage socket={this.socket} />
                )}/>
                <Route path="/about" render={(props) => (
                    <About socket={this.socket} />
                )}/>
                <Route path="/guides" render={(props) => (
                    <Guides socket={this.socket} />
                )}/>
                <Route path="/ProductDetail" render={(props) => (
                    <ProductDetail socket={this.socket} />
                )}/>
                <Route path="/cart" render={(props) => (
                    <Cart socket={this.socket} />
                )}/>
                <Route path="/checkout" render={(props) => (
                    <Checkout socket={this.socket} />
                )}/>
                <Route path="/orderCompleted" render={(props) => (
                    <OrderCompleted socket={this.socket} />
                )}/>
            </Switch>
        );
    }
}

export default App;
