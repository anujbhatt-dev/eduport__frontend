 import React, {Component} from "react"
 import Aos from "aos"
 import "aos/dist/aos.css"

 class Price extends Component{

   state={
     data:[
       {
         type:"Standard",
         typeDetail:"All basic things for businesses that are just getting started.",
         price:"$10",
         list:[
           "Unlimited Terms & Users","Supported Object: Leads & Cases","Unlimited Filters and workflow","Round robin assignment","Pause & Play assignment"
         ]
       },
       {
         type:"Professional",
         typeDetail:"Better insights for growing business that more customers.",
         price:"$15",
         list:[
           "Unlimited Terms & Users","Supported Object: Leads & Cases","Unlimited Filters and workflow","Round robin assignment","Pause & Play assignment"
         ]
       },{
         type:"Premium",
         typeDetail:"Advanced features for pros who need more customization.",
         price:"Custom",
         list:[
           "Unlimited Terms & Users","Supported Object: Leads & Cases","Unlimited Filters and workflow","Round robin assignment","Pause & Play assignment"
         ]
       },
     ]
   }

   componentDidMount=()=>{
     Aos.init({duration:1000});
   }

   componentDidUpdate=()=>{
     Aos.init({duration:1000});
   }

   render(){
     let imgUrl="data:image/png;base64,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"
     return (
         <div className="price">
              {this.state.data.map((data,i)=>{
                return <div  className={"price__card "+"price__card-"+(i+1)}>
                           {i===1?<div className="price__card-mostPopular"><img src={imgUrl} alt=""/></div>:null}
                          <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-type">{data.type}</div>
                          <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-typeDetail">{data.typeDetail}</div>
                          <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-price">{data.price}</div>
                          {data.type==="Premium"? <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-time">pricing</div>:<div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-time">User per month</div>}
                          {data.list.map(item=>{
                            return <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-list">
                                        <div className="price__card-list-tick"><i className="fa fa-check" aria-hidden="true"></i></div>
                                        <div className="price__card-list-item">{item}</div>
                                   </div>
                          })}
                          <button data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="btn btn-blue price__card--btn">Start Free Trial</button>
                       </div>
              })}
         </div>
     )
   }
 }


export default Price;
