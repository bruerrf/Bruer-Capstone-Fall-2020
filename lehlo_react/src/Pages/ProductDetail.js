import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from "Components/navbar.js";
import ProductDetailFill from "Components/ProductDetailFill.js";
import Footer from "Components/footer.js";

class ProductDetail extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
        this.query = props.location.query;
    }
    render(){
        return (
            <div>
            <Navbar currentPage="About"/>
            <ProductDetailFill productID={this.query.productID} socket = {this.socket}/>
            <Footer/>
            </div>
        );
    }
}

export default withRouter(ProductDetail);
