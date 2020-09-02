import React, {Component} from "react"
import Spinner from "../../../../UI/spinner/spinner"
import Backdrop from "../../../../UI/backdrop/backdrop"
import enquire from "../../../../assets/images/enquire.svg"
import axios from "axios"

class LandingScreen9 extends Component{

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
    ],
    loading:false,
    email:"",
    name:"",
    phone:"",

  }





   submitHandler=(e)=>{

    
    this.setState({
      loading:true
    })

    axios.post("/v1/client",this.state).then(res=>{
      setTimeout(()=>{
        this.setState({
              loading:false
            })
       }, 3000);
    })
       
     e.preventDefault();
   }

   inputHandler=(e)=>{
               this.setState({[e.target.name]:e.target.value})
   }


  render(){

    return (<><div style={{color:this.props.styles.color}} className="landingScreen9__head">Why Wait! <span >Get Started </span></div>
        <div style={this.props.styles} className="landingScreen9">
                <div  className="landingScreen9__details">
                     <div style={{display:"none"}} className="landingScreen9__details-contact">Contact Us</div>
                     <div style={{display:"none"}} className="landingScreen9__details-contactNo">+ 91 8889266799</div>
                     <div style={{display:"none"}} className="landingScreen9__details-contactNo">+ 91 8080107744</div>
                     <div style={{display:"none"}} className="landingScreen9__details-email">hello@eduports.in</div>
                </div>
                <div className="landingScreen9__enquire">
                     {this.state.loading?<><Spinner/><Backdrop show={this.state.loading}/></>:<form onSubmit={(e)=>this.submitHandler(e)} className="landingScreen9__enquire-form" >
                           <input onChange={(e)=>this.inputHandler(e)} name="name" required className="landingScreen9__enquire-form-input" placeholder="Your Name *" type="text"/>
                           <input onChange={(e)=>this.inputHandler(e)} name="phone" required className="landingScreen9__enquire-form-input" placeholder="Your Number *" type="tel"/>
                           <input onChange={(e)=>this.inputHandler(e)} name="email" className="landingScreen9__enquire-form-input" placeholder="Your Email *" type="email"/>
                           <button type="submit"  className="landingScreen9__enquire-form-btn">Enquire Now</button>
                     </form>}
                </div>
                <div  className="landingScreen9__message">
                     <img style={{display:"none"}} src={enquire} alt=""/>
                </div>

        </div></>
    )
  }
}


export default LandingScreen9;
