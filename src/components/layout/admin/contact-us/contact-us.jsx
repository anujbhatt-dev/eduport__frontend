import React, {Component} from "react"
import Spinner from "../../../../UI/spinner/spinner"
import {Helmet} from "react-helmet"
import LayoutContext from "../../../layout-context"
import axios from "axios"


 class AdminContactUs extends Component{


    state={

      // content:null,
      // h1:"get free",
      // h2:"EXPERT COUNSELLING",
      // h3:"We need a few details to reach you.",
      // c1:"Pref",
      // c2:"",
      // c3:"",
      loading:true,
      // formData:{
      //   name:'',
      //   mobile:"",
      //   email:''
      // },
      // loadinng:false
    }

    static contextType=LayoutContext;

    submitHandler=(e)=>{
      e.preventDefault();
     axios.post("v1/admin/contactpage",this.state).then(res=>{
       alert("saved");
     })
    }

    componentDidMount=()=>{
      window.scrollTo({top:0,behavior:"smooth"})
      
    }

    componentDidUpdate=()=>{
      if(this.state.loading)
     {  this.setState({... this.props.content.contactPage});
       this.setState({loading:false});}
    }

    inputHandler=(e)=>{
      this.setState({[e.target.name]:e.target.value});
    }




   render(){

    console.log(this.state)

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
                    <input name="h1" onChange={(e)=>this.inputHandler(e)} value={this.state.h1} className="contactUs__form-h1 contactUs__form-h1--mod"/>
                    <input name="h2" onChange={(e)=>this.inputHandler(e)} value={this.state.h2} className="contactUs__form-h1"/>
                    <input name="h3" onChange={(e)=>this.inputHandler(e)} value={this.state.h3} className="contactUs__form-h2"/>
                    <label htmlFor="contactUs__name">Name</label>
                    <input disabled required id="contactUs__name" name="name" placeholder="Name" className="contactUs__form-input" type="text"/>
                    <label htmlFor="contactUs__number">Mobile</label>
                    <input disabled required id="contactUs__number" name="number" placeholder="Mobile" className="contactUs__form-input" type="tel"/>
                    <label htmlFor="contactUs__email">Email</label>
                    <input disabled  id="contactUs__email" name="email" placeholder="Email" className="contactUs__form-input contactUs__form-input-email" type="email"/>
                    <label htmlFor="contactUs__category">Preferences</label>
                    <input  name="c1" onChange={(e)=>this.inputHandler(e)}  value={this.state.c1} required  placeholder="prefrence1" className="contactUs__form-input" type="text"/>
                    <input  name="c2" onChange={(e)=>this.inputHandler(e)}  value={this.state.c2} required  placeholder="prefrence2" className="contactUs__form-input" type="text"/>
                    <input  name="c3" onChange={(e)=>this.inputHandler(e)}  value={this.state.c3} required  placeholder="prefrence3" className="contactUs__form-input" type="text"/>

                    <input type="submit" className="contactUs__form-submit" value="SAVE"/>
                    <div className="contactUs__form-terms">By signing up, you agree to Eduport’s  <span>Privacy policy</span> and <span>Terms of Use.</span></div>

                </form>:<Spinner />}
          </div>
          </>
     )
   }
 }


export default AdminContactUs;
