import React, {Component} from "react"
import Landing from "./landing/landing"
import Pricing from "./pricing/pricing"
import Blogs from "./blogs/blogs"
import AboutUs from "./about-us/about-us"
import ContactUs from "./contact-us/contact-us"
import Navigation from "./navigation/navigation"
import CallUsBar from "./call-us-bar/call-us-bar"
import {Switch,Route} from "react-router-dom"
import Footer from "./footer/footer"

 class Layout extends Component{



   render(){

     return (

        <div className="Layout">
           <CallUsBar />
           <div className="main">
             <Navigation styles={this.props.styles}/>
             <Switch>
                <Route exact path="/">
                    <Landing  styles={this.props.styles}/>
                </Route>
                <Route exact path="/pricing">
                    <Pricing   styles={this.props.styles}/>
                </Route>
                <Route exact path="/contactUs">
                    <ContactUs  styles={this.props.styles}/>
                </Route>
                <Route exact path="/aboutUs">
                    <AboutUs  styles={this.props.styles}/>
                 </Route>
                 <Route exact path="/blogs">
                     <AboutUs  styles={this.props.styles}/>
                  </Route>
             </Switch>
           </div>
            <Footer/>
        </div>
     )
   }
 }


export default Layout;
