import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from "Components/navbar.js";
import Footer from "Components/footer.js";
import "./css/BlogPage.css";

class BlogPage extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;

    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render(){
        return (
            <div className = "blogPageBody">
                <Navbar currentPage="About"/>
                <div className = "grid-container">
                    <div className = "blog1" id="blog1">
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
                    </div>
                    <div className = "blog2" id="blog2">
                        <h4>In Latin we post!  11/03/2020 Blog Entry!</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis. Iaculis eu non diam phasellus. Id cursus metus aliquam eleifend mi in nulla posuere. Habitant morbi tristique senectus et netus et malesuada. Blandit volutpat maecenas volutpat blandit aliquam. Enim ut sem viverra aliquet eget sit amet. At imperdiet dui accumsan sit amet nulla. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Nunc non blandit massa enim nec dui nunc mattis enim. Leo urna molestie at elementum eu facilisis sed odio morbi. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Nulla malesuada pellentesque elit eget gravida cum. Metus vulputate eu scelerisque felis. Quisque egestas diam in arcu cursus euismod quis viverra nibh. A condimentum vitae sapien pellentesque. Gravida neque convallis a cras semper auctor neque.
                        </p>
                        <p>
                            Magna fermentum iaculis eu non. Nullam eget felis eget nunc lobortis. Integer enim neque volutpat ac tincidunt vitae. Euismod elementum nisi quis eleifend quam. Facilisis magna etiam tempor orci. Tortor at risus viverra adipiscing at in tellus integer. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Condimentum vitae sapien pellentesque habitant morbi. Fusce id velit ut tortor pretium viverra. Sed enim ut sem viverra aliquet eget sit amet. Facilisis volutpat est velit egestas. Ridiculus mus mauris vitae ultricies. Sem viverra aliquet eget sit amet tellus.
                        </p>
                        <p>
                            Id aliquet risus feugiat in ante. Aliquam purus sit amet luctus. Pulvinar neque laoreet suspendisse interdum. Eget duis at tellus at urna condimentum mattis pellentesque. Purus sit amet volutpat consequat mauris nunc. Ut diam quam nulla porttitor. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eget duis at tellus at urna condimentum. Velit sed ullamcorper morbi tincidunt ornare. In ornare quam viverra orci sagittis eu volutpat. Ipsum nunc aliquet bibendum enim facilisis. Vel eros donec ac odio tempor orci dapibus. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Fames ac turpis egestas integer eget aliquet nibh. Consequat nisl vel pretium lectus. Pellentesque elit eget gravida cum sociis natoque penatibus et. Vitae aliquet nec ullamcorper sit amet risus. Quis viverra nibh cras pulvinar.
                        </p>
                        <p>
                            Blandit massa enim nec dui nunc mattis enim ut. Magna etiam tempor orci eu lobortis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Quam lacus suspendisse faucibus interdum. Vitae elementum curabitur vitae nunc sed velit dignissim. Est ante in nibh mauris cursus. Blandit volutpat maecenas volutpat blandit aliquam. Faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sagittis vitae et leo duis ut diam quam. In eu mi bibendum neque egestas congue quisque egestas. Ultrices neque ornare aenean euismod elementum nisi. Est ante in nibh mauris cursus mattis. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Convallis posuere morbi leo urna molestie at elementum eu. Id ornare arcu odio ut sem nulla pharetra. Justo donec enim diam vulputate ut pharetra sit.
                        </p>
                    </div>
                    <div className = "menu">
                        <h4>Read our other blog entries!</h4>
                        <button className = "blogLink" onClick={(t)=>{this.scrollTo("blog1")}}>Welcome to Our Blog!</button>
                        <button className = "blogLink" onClick={(t)=>{this.scrollTo("blog2")}}>In Latin We Post!</button>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
    
    scrollTo(id) {
        document.getElementById(id).scrollIntoView();
    }
}


export default BlogPage;