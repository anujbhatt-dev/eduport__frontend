import React, {Component} from "react"


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
    ]
  }

  render(){

    return (
        <div className="landingScreen9">
                <div className="landingScreen9__details">
                     <div className="landingScreen9__details-whyWait">why wait!</div>
                     <div className="landingScreen9__details-getStarted">GetStarted</div>
                     <div className="landingScreen9__details-contact">Contact Us</div>
                     <div className="landingScreen9__details-contactNo">+ 91 8889266799</div>
                     <div className="landingScreen9__details-contactNo">+ 91 8080107744!</div>
                     <div className="landingScreen9__details-email">hello@eduports.in</div>
                </div>
                <div className="landingScreen9__enquire">
                     <form className="landingScreen9__enquire-form" onSubmit={this.submitHandler}>
                           <input required className="landingScreen9__enquire-form-input" placeholder="Your Name" type="text"/>
                           <input required className="landingScreen9__enquire-form-input" placeholder="Your Number" type="tel"/>
                           <input className="landingScreen9__enquire-form-input" placeholder="Your Email" type="email"/>
                           <button  className="landingScreen9__enquire-form-btn">Enquire Now</button>
                     </form>
                </div>
                <div className="landingScreen9__message">
                     message
                </div>

        </div>
    )
  }
}


export default LandingScreen9;
