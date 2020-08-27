 import React, {Component} from "react"


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

   render(){

     return (
         <div className="price">
              {this.state.data.map((data,i)=>{
                return <div className={"price__card "+"price__card-"+(i+1)}>
                          <div className="price__card-type">{data.type}</div>
                          <div className="price__card-typeDetail">{data.typeDetail}</div>
                          <div className="price__card-price">{data.price}</div>
                          {data.type==="Premium"? <div className="price__card-time">pricing</div>:<div  className="price__card-time">User per month</div>}
                          {data.list.map(item=>{
                            return <div className="price__card-list">
                                        <div className="price__card-list-tick"><i className="fa fa-check" aria-hidden="true"></i></div>
                                        <div className="price__card-list-item">{item}</div>
                                   </div>
                          })}
                          <button className="btn btn-blue price__card--btn">Start Free Trial</button>
                       </div>
              })}
         </div>
     )
   }
 }


export default Price;
