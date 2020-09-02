 import React, {Component} from "react"


 class AdminFaq extends Component{

   state={
     head:"Want some clarification please go through our FAQs.",
     questions:[
       {
         question:"Do i need to purchase Power Router licenses for all users in my salesforce org?",
         answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, numquam dolores nostrum quidem nobis architecto, ab rerum debitis ducimus adipisci doloribus possimus, reiciendis ad ratione nisi vitae odit doloremque. Esse, minus unde consectetur animi reprehenderit eaque architecto cupiditate doloribus harum nam porro delectus ipsa nemo dolor aspernatur iusto eius, quidem sit ex, tempora facere non consequuntur neque sapiente! Nihil, adipisci, natus! Labore magni officiis, esse deleniti explicabo, sit ipsam impedit fugit aut omnis beatae delectus, eius, a inventore quia error deserunt doloremque fugiat quod. Earum voluptatum recusandae doloribus modi provident nihil possimus ipsam, alias esse! Fugit sunt quia repudiandae velit. ipsum dolor sit amet, consectetur adipisicing elit. Illum dicta dolorum perferendis. Ab libero rem accusamus, quam iste alias temporibus.",
         show:false
       },
       {
         question:"How do i get started after installing Power Router?",
         answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque similique, sequi quaerat quos vero possimus ipsa culpa. Iste praesentium placeat eligendi voluptas, itaque commodi sint mollitia nobis. Fugit earum, at veritatis qui impedit culpa. Explicabo praesentium iure ipsa quo maxime aliquid quibusdam sequi deserunt, tempora officiis placeat a earum impedit, quae, aspernatur quasi mollitia, consequatur cumque facere. Doloremque adipisci impedit, quas, dolore cupiditate porro cumque consequatur sapiente veniam, voluptatem possimus distinctio deleniti aliquid. Repellendus quis quibusdam quae odio commodi fuga quas mollitia deserunt numquam dolores, corporis rerum reiciendis iure minima, velit, vel. Libero asperiores odit voluptatum, omnis iste magni nesciunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dicta dolorum perferendis. Ab libero rem accusamus, quam iste alias temporibus.",
         show:false
       },
       {
         question:"Which salesforce objects do you support for routing?",
         answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dicta dolorum perferendis. Ab libero rem accusamus, quam iste alias temporibus.",
         show:false
       },
       {
         question:"Which salesforce edition do you support?",
         answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dicta dolorum perferendis. Ab libero rem accusamus, quam iste alias temporibus.",
         show:false
       },
       {
         question:"How do i buy additional licenses?",
         answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dicta dolorum perferendis. Ab libero rem accusamus, quam iste alias temporibus.",
         show:false
       },
       {
         question:"Which salesforce edition do you support?",
         answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dicta dolorum perferendis. Ab libero rem accusamus, quam iste alias temporibus.",
         show:false
       },
     ]
   }

   showHandler=(i)=>{
     let newState = this.state
     newState.questions[i].show = !newState.questions[i].show
     this.setState({
       ...newState
     })
   }

   render(){

     return (
         <div className="faq">
             <div style={{color:this.props.styles.color}} className="faq__head">{this.state.head}</div>
             <div className="faq__questions">
                 {this.state.questions.map((data,i)=>{
                   return <div onClick={()=>this.showHandler(i)} className="faq__questions-item">
                               <p >{data.question} {data.show?<i className="renderAnimation doubleArrow fa fa-angle-double-down" aria-hidden="true"></i>:<i className="renderAnimation2 doubleArrow fa fa-angle-double-down" aria-hidden="true"></i>}</p>
                               <h6 style={{display:data.show?"block":"none"}} >{data.answer}</h6>
                           </div>
                 })}
             </div>
         </div>
     )
   }
 }


export default AdminFaq;
