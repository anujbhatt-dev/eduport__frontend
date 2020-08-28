 import React, {Component} from "react"


 class ContactUs extends Component{

    state={
      h1:"get free",
      h2:"EXPERT COUNSELLING",
      h3:"We need a few details to reach you.",
      formData:{
        name:'',
        mobile:"",
        email:''
      }
    }

   render(){

     return (
          <div style={{color:this.props.styles.color}} className="contactUs">
                <h1 className="contactUs__h1">{this.state.h1}</h1>
                <h2 className="contactUs__h1">{this.state.h2}</h2>
                <h2 className="contactUs__h2">{this.state.h3}</h2>
                <form className="contactUs__form" omSubmit={this.submitHandler}>
                    <input required placeholder="Name" className="contactUs__form-input" type="text"/>
                    <input required placeholder="Nunber" className="contactUs__form-input" type="tel"/>
                    <input required placeholder="Email" className="contactUs__form-input" type="email"/>
                    <button className="contactUs__form-submit">Proceed</button>
                </form>
                <div className="contactUs__benefits">
                    <div className="contactUs__benefits-item">
                        <div className="contactUs__benefits-item-icon"><i className="fa fa-home" aria-hidden="true"></i></div>
                        <div className="contactUs__benefits-item-text">Connect with our Expert Counselors</div>
                    </div>
                    <div className="contactUs__benefits-item">
                        <div className="contactUs__benefits-item-icon"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                        <div className="contactUs__benefits-item-text">Get complete guidance</div>
                    </div>
                    <div className="contactUs__benefits-item">
                        <div className="contactUs__benefits-item-icon"><i className="fa fa-money" aria-hidden="true"></i></div>
                        <div className="contactUs__benefits-item-text">It is completely Free!</div>
                    </div>
                </div>
                <div className="contactUs__details">
                    <div className="contactUs__details-contact">Contact Us</div>
                    <div className="contactUs__details-contactNo">+ 91 8889266799</div>
                    <div className="contactUs__details-contactNo">+ 91 8080107744</div>
                    <div className="contactUs__details-email">hello@eduports.in</div>
                </div>
          </div>
     )
   }
 }


export default ContactUs;
