 import React, {Component} from "react"


 class CallUsBar extends Component{

   state={
     show:false
   }

   showHandler=()=>{
     this.setState({
       show:!this.state.show
     })

   }


   render(){

     return (
          <div className="callUsBar"><a href="tel://+918889266799"><i onClick={this.showHandler} id="call" className="call fa fa-phone" aria-hidden="true"></i></a>  {this.state.show?<span >+91 8080107744</span>:null}</div>
     )
   }
 }


export default CallUsBar;
