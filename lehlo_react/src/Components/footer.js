import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import "./css/footer.css";

class footer extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (
            <div className="bottomBar">
            <p>Lehlo Website created by Rheo Bruer, 2020</p>
            </div>
        );
    }
}

export default footer;
