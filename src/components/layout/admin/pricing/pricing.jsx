import React, {Component} from "react"
import AdminFaq from "./faq/faq"
import AdminPrice from "./price/price"
// import LandingScreen9 from "../landing/landing-screen-9/landing-screen-9"
import {Helmet} from "react-helmet"
import axios from "axios"

 class AdminPricing extends Component{

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

    
   faqsHandler=(faqs)=>{
     let content={... this.state.content}
     content[faqs]=faqs;
     this.setState({content:content});
   }


   pricingsHandler=(pricings)=>{
    let content={... this.state.content}
    content[pricings]=pricings;
    this.setState({content:content});

   }

   saveHandler=(e)=>{
    e.preventDefault();
    axios.post("/v1/admin/pricingpage",this.state.content).then(res=>{
       alert("saved");
    })
   }
   


   render(){

    if(!this.props.authenticated)
    window.location="http://localhost:3000/admin/verify";

     return (<>
          <Helmet>
             <meta charSet="utf-8" />
             <title>{"Eduport By IndiaPort | Pricing"}</title>
             <link rel="canonical" href={"http://localhost:3000/pricing"} />
             <meta name="description" content={"making india world's factory"} />
         </Helmet>
          <div styles={this.props.styles} className="pricing">
              {this.state.content.pricings?<AdminPrice  
                                           styles={this.props.styles}
                                           pricingsHandler={this.pricingsHandler}
                                           pricings={this.state.content.pricings}/>
                                           
                                           
              :null}
             
             
             {this.state.content.faqs?<AdminFaq
                                     faqs={this.state.content.faqs}
                                      styles={this.props.styles}
                                      faqsHandler={this.faqsHandler}/>
             :null}


              <button className="load__btn" onClick={(e)=>this.saveHandler(e)}>Save</button>
          </div>
          </>
     )
   }
 }


export default AdminPricing;
