import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "Components/navbar.js";
import Gallery from "Components/Gallery.js";
import Footer from "Components/footer.js";
import "./css/Store.css";

class Store extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
    }
    render(){
        return (
            <div className = "storeBody">
            <Navbar currentPage="About"/>
            <Gallery socket={this.socket}/>
            <Footer/>
            </div>
        );
    }
}

export default Store;
