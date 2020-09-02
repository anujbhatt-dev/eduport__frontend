import React, {Component} from "react"
import Faq from "./faq/faq"
import Price from "./price/price"
import LandingScreen9 from "../landing/landing-screen-9/landing-screen-9"
import {Helmet} from "react-helmet"

 class Pricing extends Component{

   componentDidMount=()=>{
     window.scrollTo({top:0,behavior:"smooth"})
   }

   render(){

     return (<>
          <Helmet>
             <meta charSet="utf-8" />
             <title>{"Eduport By IndiaPort | Pricing"}</title>
             <link rel="canonical" href={"http://localhost:3000/pricing"} />
             <meta name="description" content={"making india world's factory"} />
         </Helmet>
          <div styles={this.props.styles} className="pricing">
              <Price  styles={this.props.styles}/>
              <Faq styles={this.props.styles}/>
          </div>
          </>
     )
   }
 }


export default Pricing;
