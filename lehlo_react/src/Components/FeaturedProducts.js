import React from 'react';
import ReactDOM from 'react-dom';
import "./css/FeaturedProduct.css";
import { Link } from 'react-router-dom';

class FeaturedProduct extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
        this.socket.emit("get_product_ts", {});
        this.socket.on("get_product_tc", this.onGetProduct.bind(this));
        this.state = {"fpelements":[]};
    }
    onGetProduct(data){
        let rtn = [];
        let products = data.products;
        let length = 9;
        if (products.length < 9){
            length = products.length;
        }
        for (let i = 1; i < length; i++) {
            let picfile = "../../Pictures/" + products[i].picfilename;
            rtn.push(<div className = "box">
                    <Link to={{
                        pathname: '/ProductDetail',
                        query: {"productID": products[i]._id}
                    }}>
                        <img src={picfile}/>
                        <p>{products[i].name}</p>
                    </Link>
                </div>);
        }
        this.setState({"fpelements": rtn});
    }
    
    render(){
        return (
            <div className = "productcontainer">
                <div className = "headline">
                    <p>Featured Products</p>
                    <Link className = "productLink" to="/store">All Products</Link>
                </div>
                {this.state.fpelements}
            </div>

        );
    }
}

export default FeaturedProduct;