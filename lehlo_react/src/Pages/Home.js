import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "Components/navbar.js";
import FeaturedProduct from "Components/FeaturedProducts.js";
import Blog from "Components/Blog.js";
import Footer from "Components/footer.js";
import "./css/Home.css";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
    }
    componentDidMount() {
        document.title = "Lehlo Website";
        console.log(document.head);
    }
    render(){
        return (
            <div className = "body">
            <Navbar currentPage="About"/>
            <div className = "homeimg">
                <img src = "../../Pictures/homepagepic.jpg"/>
            </div>
            <FeaturedProduct socket= {this.socket}/>
            <Blog socket={this.socket}/>
            <Footer/>
            </div>
        );
    }
}

export default Home;
