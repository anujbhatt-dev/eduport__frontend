 import React, {Component} from "react"
 import Aos from "aos"
 import "aos/dist/aos.css"

 class AdminPrice extends Component{

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

     return (
         <div className="price">
              {this.state.data.map((data,i)=>{
                return <div  className={"price__card "+"price__card-"+(i+1)}>
                           {i===1?<div className="price__card-mostPopular">-Most Popular-</div>:null}
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
                          <button data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className={i===1?"btn btn-blue price__card--btn btn-blue-2":"btn btn-blue price__card--btn"}>Start Free Trial</button>
                       </div>
              })}
         </div>
     )
   }
 }


export default AdminPrice;
