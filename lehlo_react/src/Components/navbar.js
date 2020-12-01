import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import "./css/navbar.css";

class navbar extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (
            <div className="header">
                <div className = "wrapper">
                </div>
                <div className = "navbar">
                    <Link className = "links" to="/about">About</Link>
                    <Link className = "links" to="/blog">Blog</Link>
                    <Link className = "links" to="/">Lehlo</Link>
                    <Link className = "links" to="/store">Store</Link>
                    <Link className = "links" to="/guides">Guides</Link>
                </div>
                <div className = "wrapper">
                    <Link className = "link2" to="/cart">Cart</Link>
                </div>
            </div>
        );
    }
}

export default navbar;
