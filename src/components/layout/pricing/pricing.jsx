import React, {Component} from "react"
import Faq from "./faq/faq"
import Price from "./price/price"
import LandingScreen9 from "../landing/landing-screen-9/landing-screen-9"

 class Pricing extends Component{

   render(){

     return (
          <div styles={this.props.styles} className="pricing">
              <Price  styles={this.props.styles}/>
              <Faq styles={this.props.styles}/>
          </div>
     )
   }
 }


export default Pricing;
