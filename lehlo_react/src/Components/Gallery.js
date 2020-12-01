import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import "./css/Gallery.css";

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
        this.socket.emit("get_product_ts", {});
        this.socket.on("get_product_tc", this.onGetProduct.bind(this));
        this.state = {"fpelements":[]};
        this.onSort = this.onSort.bind(this);
    }
    onGetProduct(data){
        let rtn = [];
        let products = data.products;
        for (let i = 0; i < products.length; i++) {
            let picfile = "../../Pictures/" + products[i].picfilename;
            rtn.push(<div className = "storebox">
                    <Link to={{
                        pathname: '/ProductDetail',
                        query: {"productID": products[i]._id}
                    }}>
                        <img src={picfile}/>
                        <p>{products[i].name}</p>
                        <p>${products[i].price}</p>
                    </Link>
                </div>);
        }
        this.setState({"fpelements": rtn});
    }
    
    onSort(n) {
        console.log(n);
        this.socket.emit("get_product_ts", {"sort": n});
    }
    
    render(){
        return (
            <div className = "storeGalleryBody">
                <div className = "storeGalleryHeader">
                    <h3>Shop Lehlo Brand Products</h3>
                    <select className = "sortSelect" onChange = {(e)=>this.onSort(e.target.value)}>
                        <option value = "name">Name</option>
                        <option value = "priceLow">Price (Low to High)</option>
                        <option value = "priceHigh">Price (High to Low)</option>
                    </select>
                </div>
                <div className = "storecontainer">
                    {this.state.fpelements}
                </div>
            </div>
        );
    }
}

export default Gallery;