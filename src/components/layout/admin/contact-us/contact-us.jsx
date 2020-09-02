import React, {Component} from "react"
import Spinner from "../../../../UI/spinner/spinner"
import {Helmet} from "react-helmet"

 class AdminContactUs extends Component{


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

    componentDidMount=()=>{
      window.scrollTo({top:0,behavior:"smooth"})
    }

   render(){

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | Contact Us"}</title>
              <link rel="canonical" href={"http://localhost:3000/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          <div style={{color:this.props.styles.color}} className="contactUs">
                 <hr className="hr"/>
                {!this.state.loading?<form onSubmit={(e)=>this.submitHandler(e)} className="contactUs__form">
                    <h1 className="contactUs__form-h1 contactUs__form-h1--mod">{this.state.h1}</h1>
                    <h2 className="contactUs__form-h1">{this.state.h2}</h2>
                    <h2 className="contactUs__form-h2">{this.state.h3}</h2>
                    <label htmlFor="contactUs__name">Name</label>
                    <input required id="contactUs__name" name="name" placeholder="Name" className="contactUs__form-input" type="text"/>
                    <label htmlFor="contactUs__number">Mobile</label>
                    <input required id="contactUs__number" name="number" placeholder="Mobile" className="contactUs__form-input" type="tel"/>
                    <label htmlFor="contactUs__email">Email</label>
                    <input  id="contactUs__email" name="email" placeholder="Email" className="contactUs__form-input contactUs__form-input-email" type="email"/>
                    <label htmlFor="contactUs__category">Preference</label>
                    <select required id="contactUs__category" name="category">
                      <option >choose you preference</option>
                      <option value="standard">Standard</option>
                      <option value="professional">Professional</option>
                      <option value="premium">Premium</option>
                    </select>
                    <input type="submit" className="contactUs__form-submit" value="Proceed"/>
                    <div className="contactUs__form-terms">By signing up, you agree to Eduport’s  <span>Privacy policy</span> and <span>Terms of Use.</span></div>

                </form>:<Spinner />}
          </div>
          </>
     )
   }
 }


export default AdminContactUs;
