import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import "./css/Blog.css";

class Blog extends React.Component {
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
        for (let i = 1; i < products.length; i++) {
            let picfile = "../../Pictures/" + products[i].picfilename;
            rtn.push(<div className = "box">
                    <a target="_blank" href={picfile}>
                        <img src={picfile}/>
                        <p>{products[i].name}</p>
                    </a>
                </div>);
        }
        this.setState({"fpelements": rtn});
    }
    
    render(){
        return (
            <div className = "container">
            <h4>Welcome to our blog! </h4>
            <p>
                Join us as we embark on adventure! It has always been a dream of our’s to try out van life. This blog will cover all things van life: including van creation, tips for living on the road, working remotely, making money through blogs and social media, travel guides for trip locations, and of course a little bit about our personal lifestyles. 
            </p>
            <h5> Who We Are:</h5>
            <p>
                Lehlo is made of two main members: Rheo and Lilly (hence the name.) Rheo is a young, hairy, dairy addicted computer scientist. Lilly is a ski and snowboard instructor. Oh, and of course both are now website creators and blog writers! Rheo and Lilly both attended and graduated from Appalachian State University. Lilly got her bachelor’s in Social Work and Rheo in Computer Science. They met at a dry cleaners in Boone, North Carolina and have been inseparable since. They both had the intention of living in a van before they met each other. Now, they are an unstoppable team. 
            </p>
            <p>
                Lilly worked as a Data Specialist in a homeless shelter for a short time, but quickly discovered the sedentary life was not here for her. Lilly grew up in a rural town in western North Carolina. She comes from a conservative Southern Baptist Family… surprising, no? She has extensive experience bottle feeding neonatal kittens as she grew up working closely with a couple Humane Societies.  

            </p>
            <p>
                Rheo attended Engineer school before deciding to pursue computer science as a means to be able to travel long term.  His main interests are traveling and working on cars. Rheo grew up in a Neo-Luddite Bohemian family in an off the grid house in Florida keys.
            </p>
            <Link className = "homeLink" to="/blog">All Blog Posts</Link>
            </div>

        );
    }
}

export default Blog;