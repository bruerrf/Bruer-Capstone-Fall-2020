import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "Components/navbar.js";
import Footer from "Components/footer.js";
import "./css/Guides.css";

class Guides extends React.Component {
    constructor(props){
        super(props);
        this.socket = props.socket;
    }
    
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render(){
        return (
            <div className = "guidesBody">
                <Navbar currentPage="About"/>
                <div className = "grid-container2">
                    <div className = "guide1" id = "guide1">
                        <h2>City Travel Guides</h2>
                        <h4>Roanoke, VA</h4>
                        <h5>Places to Eat, Drink, and Snack!</h5>
                        <ul>
                            <li>Cello Coffee House and Cafe
                                <ul>
                                    <li>
                                        Mediterranean Cafe with an excellent selection of Turkish Coffee, Hummus, Shawarma, Falafel, Baklava, Gyros, Salads, Smoothies and Ice Cream!  We loved this quaint little place for its authenticity
                                    </li>
                                    <li>
                                        Address: 118 Campbell Ave SE, Roanoke, VA 24011
                                    </li>
                                    <li>
                                        Hours: Mon-Sat 11am - 8pm, Sun 11am - 7pm
                                    </li>
                                </ul>
                            </li>
                            <li>Inka Grill Peruvian Cuisine
                                <ul>
                                    <li>
                                        Peruvian Restaurant with fresh seafood and Ceviche!
                                    </li>
                                    <li>
                                        Address: 611 S Jefferson St Suite 3, Roanoke, VA 24011
                                    </li>
                                    <li>
                                        Hours: Mon-Sat 11am - 9pm, Sun 11am - 8pm
                                    </li>
                                </ul>
                            </li>
                            <li>Homestead Creamery’s Farm Market
                                <ul>
                                    <li>
                                        Located a short drive from Roanoke, they make dozens of products on-site, from the many flavors of seasonal ice cream to fresh milk, jams, and baked goods. The market also contains a small restaurant section that serves cold and hot sandwiches, fresh salads, seasonally inspired soups, and a handful of sides to pair with your meal.
                                    </li>
                                    <li>
                                        Address: 7254 Booker T Washington Hwy, Wirtz, VA 24184
                                    </li>
                                    <li>
                                        Hours: Mon-Thurs 11am - 6pm, Fri & Sat 10am - 7pm
                                    </li>
                                </ul>
                            </li>
                            <li>Deshutes Brewery
                                <ul>
                                    <li>
                                        Large beer tasting room with 24 different beers on tap!  Make sure to get a flight to sample some of their amazing seasonal flavors.
                                    </li>
                                    <li>
                                        Address: 315 Market St SE, Roanoke, VA 24011
                                    </li>
                                    <li>
                                        Hours: Mon-Thurs 1pm - 9pm, Fri 1pm - 10pm, Sat 11am - 10pm, Sun 4pm - 8pm
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h5>Things to See!</h5>
                        <ul>
                            <li>Taubman Museum of Art
                                <ul>
                                    <li>
                                        FREE ADMISSION
                                    </li>
                                    <li>
                                        110 Salem Ave SE, Roanoke, VA 24011
                                    </li>
                                    <li>
                                        Hours: Fri & Sat 10am - 5pm, Sun 12pm - 5pm
                                    </li>
                                </ul>
                            </li>
                            <li>Mill Mountain Star
                                <ul>
                                    <li>
                                        Beautiful large star decoration that can be seen from many places in downtown!  Easy to spot so don’t miss it!
                                    </li>
                                    <li>
                                        2000 J B Fishburn Pkwy, Roanoke, VA 24014
                                    </li>
                                </ul>
                            </li>
                            <li>History Museum of Western Virginia
                                <ul>
                                    <li>
                                        The History Museum of Western Virginia collection comprises the largest repository of material devoted to tracing human history of Western Virginia, and especially of the Roanoke area as well as the photography of O. Winston Link, who captured the end of the steam locomotive travel along Norfolk & Western tracks.
                                    </li>
                                    <li>
                                        Address: 101 Shenandoah Ave NE, Roanoke, VA 24016
                                    </li>
                                    <li>
                                        Hours: Tue-Sat 10am - 5pm
                                    </li>
                                </ul>
                            </li>
                            <li>Virginia Museum of Transportation
                                <ul>
                                    <li>
                                        Address: 303 Norfolk Ave SW, Roanoke, VA 24016
                                    </li>
                                    <li>
                                        Hours: Tue-Sat 10am - 5pm, Sun 1pm - 5pm
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h5>Things to Do!</h5>
                        <ul>
                            <li>Roanoke Valley Greenway
                                <ul>
                                    <li>
                                        Bike Rentals Available
                                    </li>
                                    <li>
                                        Beautiful views along the Roanoke River
                                    </li>
                                    <li>
                                        Address: 1206 Kessler Mill Rd, Salem, VA 24153
                                    </li>
                                </ul>
                            </li>
                            <li>Black Dog Salvage
                                <ul>
                                    <li>
                                        Acclaimed warehouse carrying an eclectic variety of antiques & restored furniture in an airy space.
                                    </li>
                                    <li>
                                        Address: 902 13th St SW, Roanoke, VA 24016
                                    </li>
                                    <li>
                                        Hours: Tues-Sat 9am - 5pm, Sun 11am - 4pm
                                    </li>
                                </ul>
                            </li>
                            <li>Roaring Run Recreation Area
                                <ul>
                                    <li>
                                        Comprising over 3,500 acres, this woodland reserve features a mountain stream & 5 hiking trails.  From the parking lot, you’ll hike Roaring Run Loop Trail about three-quarters of a mile to reach the payoff, the picturesque Roaring Run Waterfalls. The trail follows the stream on the way up, and then descends down the wooded slope of the mountain, creating a fairly easy 1.5 hike.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className = "guide2" id = "guide2">
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
                    <div className = "menu2">
                        <p>Read our other City Travel Guides!</p>
                        <button className = "blogLink" onClick={(t)=>{this.scrollTo("guide1")}}>Roanoke, VA</button>
                        <button className = "blogLink" onClick={(t)=>{this.scrollTo("guide2")}}>Asheville, NC</button>
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

export default Guides;