 import React, {Component} from "react"


 class AdminLandingScreen5 extends Component{

   state={
     data:[
       {
         for:"Complete all 26 modules",
         detail:"Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz."
       },
       {
         for:"Take the final exam",
         detail:"Pass the final 40-question exam and get certified."
       },
       {
         for:"Share your certificate",
         detail:"Download the showcase your new qualification on LinkedIn and your CV."
       }
     ]
   }



   render(){

     return (
         <div id="screen5" style={this.props.styles} className="landingScreen5">
             <textarea  className="landingScreen5__head" value={"How it Works"}></textarea>
             <div className="landingScreen5__body">
               {this.state.data.map((data,i)=>{
                 return <><div style={{position:"relative"}} className="landingScreen5__body-box">
                            <textarea className="landingScreen5__body-box-head" value={data.for}></textarea>
                            <textarea className="landingScreen5__body-box-detail" value={data.detail}></textarea>
                        </div>
                         {i!=2?<div className="landingScreen5__body-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div>:null}
                         {i!=2?<div className="landingScreen5__body-arrowDown"><i className="fa fa-angle-down" aria-hidden="true"></i></div>:null}
                        </>
               })}

             </div>
         </div>
     )
   }
 }


export default AdminLandingScreen5;
