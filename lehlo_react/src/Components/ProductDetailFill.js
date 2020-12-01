import React from 'react';
import ReactDOM from 'react-dom';
import "./css/ProductDetailFill.css";

class ProductDetailFill extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
        this.socket.emit("get_product_ts", {"productID":props.productID});
        this.socket.on("get_product_tc", this.onGetProduct.bind(this));
        this.state = {"fpelements":[]};
    }
    onGetProduct(data){
        let rtn = [];
        let products = data.products;
        let picfile = "../../Pictures/" + products[0].picfilename;
        let options = [];
        let sizeDiv;
        if (products[0].size) {
            for (var i = 0; i < products[0].size.length; i++) {
                options.push(<option value = {products[0].size[i]}>{products[0].size[i]}</option>);
            }
            sizeDiv = (<select className = "sizeSelect" id = "sizeSelect">
                        {options}
                        </select>);
        } 
        rtn.push(<div className = "product">
                <div className = "image">
                    <img src={picfile}/>
                </div>
                <div className = "productText">
                    <h2>{products[0].name}</h2>
                    <p>price: {products[0].price}</p>
                    <p>{products[0].longDescription}</p>
                    {sizeDiv}
                    <input type = "button" value = "Add to Cart" onClick={(e)=>{this.addToCart(products[0], e.target)}}/>
                    
                </div>
            </div>);
        
        this.setState({"fpelements": rtn});
    }
    
    addToCart(product, target){
        var size = document.getElementById("sizeSelect");
        var sizeSelectedValue = "";
        if (size) {
            sizeSelectedValue = size.value;
        }
        let cartToken;
        let cartArray = [];
        if (localStorage.getItem("lehloRLcart")) {
            cartToken = JSON.parse(localStorage.getItem("lehloRLcart"));
            cartArray = cartToken.data;
        }
        cartArray.push({"_id":product._id, "name":product.name, "price":product.price, "size":sizeSelectedValue});
        localStorage.setItem("lehloRLcart", JSON.stringify({"data":cartArray}));
        target.value = "Added to Cart!";

    }
    /**<script type = "text/javascript">
                        function addToCart() {
                            var size = document.getElementByID("sizeSelect");
                            var sizeSelectedText = size.options[size.selectedIndex].innerHTML;
                            var sizeSelectedValue = size.value;
                            console.log("Selected Text: " + sizedSelectedText + " Value: " + sizeSelectedValue);
                        } 
                    </script>*/
    
    render(){
        return (
            <div className = "productContainer">
                {this.state.fpelements}
            </div>

        );
    }
}

export default ProductDetailFill;