 import React, {Component} from "react"


 class Faq extends Component{

   state={
     head:"Want some clarification please go through our FAQs.",
     questions:[
       {
         question:"Do i need to purchase Power Router licenses for all users in my salesforce org?",
         answer:""
       },
       {
         question:"How do i get started after installing Power Router?",
         answer:""
       },
       {
         question:"Which salesforce objects do you support for routing?",
         answer:""
       },
       {
         question:"Which salesforce edition do you support?",
         answer:""
       },
       {
         question:"How do i buy additional licenses?",
         answer:""
       },
       {
         question:"Which salesforce edition do you support?",
         answer:""
       },
     ]
   }

   render(){

     return (
         <div className="faq">
             <div className="faq__head">{this.state.head}</div>
             <div className="faq__questions">
                 {this.state.questions.map(data=>{
                   return <div className="faq__questions-item">{data.question}</div>
                 })}
             </div>
         </div>
     )
   }
 }


export default Faq;
