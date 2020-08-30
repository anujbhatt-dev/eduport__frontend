import React, {Component} from "react"
import Spinner from "../../../UI/spinner/spinner"

 class ContactUs extends Component{

    state={
      h1:"get free",
      h2:"EXPERT COUNSELLING",
      h3:"We need a few details to reach you.",
      formData:{
        name:'',
        mobile:"",
        email:''
      },
      loadinng:false
    }

    submitHandler=(e)=>{
      e.preventDefault();
      this.setState({
        loading:true
      })
      setTimeout(()=>{
        this.setState({
              loading:false
            })
       }, 3000);
    }


   render(){

     return (
          <div style={{color:this.props.styles.color}} className="contactUs">
                 <hr className="hr"/>
                {!this.state.loading?<form onSubmit={(e)=>this.submitHandler(e)} className="contactUs__form">
                    <h1 className="contactUs__form-h1 contactUs__form-h1--mod">{this.state.h1}</h1>
                    <h2 className="contactUs__form-h1">{this.state.h2}</h2>
                    <h2 className="contactUs__form-h2">{this.state.h3}</h2>
                    <input required placeholder="Name" className="contactUs__form-input" type="text"/>
                    <input required placeholder="Number" className="contactUs__form-input" type="tel"/>
                    <input required placeholder="Email" className="contactUs__form-input" type="email"/>
                    <select required id="category">
                      <option >choose you preference</option>
                      <option value="standard">Standard</option>
                      <option value="professional">Professional</option>
                      <option value="premium">Premium</option>
                    </select>
                    <input type="submit" className="contactUs__form-submit" value="Proceed"/>
                    <div className="contactUs__form-terms">By signing up, you agree to Eduport’s  <span>Privacy policy</span> and <span>Terms of Use.</span></div>
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

                </form>:<Spinner />}
          </div>
     )
   }
 }


export default ContactUs;
