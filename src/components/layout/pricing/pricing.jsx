import React, {Component} from "react"
import Faq from "./faq/faq"
import Price from "./price/price"
import LandingScreen9 from "../landing/landing-screen-9/landing-screen-9"
import {Helmet} from "react-helmet"

 class Pricing extends Component{


  state={
    loading:true,
     content:{},
   }

   componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})

    if(this.props.content.pricingPage)
    this.setState({content:{...this.props.content.pricingPage }});

  }

  componentDidUpdate=()=>{
   if(this.state.loading && this.props.content.pricingPage)
   this.setState({content:{...this.props.content.pricingPage },loading:false})

  }
   render(){

     return (<>
          <Helmet>
             <meta charSet="utf-8" />
             <title>{"Eduport By IndiaPort | Pricing"}</title>
             <link rel="canonical" href={"http://vast-reaches-61761.herokuapp.com/pricing"} />
             <meta name="description" content={"making india world's factory"} />
         </Helmet>
          <div styles={this.props.styles} className="pricing">
          {this.state.content.pricings?<Price pricings={this.state.content.pricings} styles={this.props.styles}/>:null}
          {this.state.content.faqs? <Faq faqs={this.state.content.faqs} styles={this.props.styles}/>:null}
          </div>
          </>
     )
   }
 }


export default Pricing;
