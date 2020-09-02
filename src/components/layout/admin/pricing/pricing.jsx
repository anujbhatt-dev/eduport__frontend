import React, {Component} from "react"
import AdminFaq from "./faq/faq"
import AdminPrice from "./price/price"
// import LandingScreen9 from "../landing/landing-screen-9/landing-screen-9"
import {Helmet} from "react-helmet"

 class AdminPricing extends Component{

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
              <AdminPrice  styles={this.props.styles}/>
              <AdminFaq styles={this.props.styles}/>
                      <button className="load__btn" onClick={this.onSubmitHandler}>Save</button>
          </div>
          </>
     )
   }
 }


export default AdminPricing;
