 import React, {Component} from "react"
 import s3p1 from "../../../../assets/images/screen3-pic1.svg"
 import s3p2 from "../../../../assets/images/screen3-pic2.svg"
 import s3p3 from "../../../../assets/images/screen3-pic3.svg"
 import Aos from "aos"
 import "aos/dist/aos.css"

 class LandingScreen3 extends Component{

   state={
     h3:"learning for everyone.",
     front1:{
       h1:"For Hobbyists",
       p1:"Find Find Courses for every learning level."
     },
     front2:{
       h1:"For Professionals",
       p1:"Get expert crafted learning material."
     },
     front3:{
       h1:"For Entrepreneurs",
       p1:"Build confidence in multiple areas."
     }

   }

   componentDidMount=()=>{
     Aos.init({duration:1000});
   }

   componentDidUpdate=()=>{
     Aos.init({duration:1000});
   }


   render(){

     return (<>
         <div style={{color:this.props.styles.color}} className="landingScreen3__head">{this.state.h3}</div>
         <div className="landingScreen3">
               <div className="landingScreen3__cardWrapper">
                     <div data-aos-once={true} data-aos="fade-right" data-aos-delay={350}  className="card">
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <div className="card__side-head card__side--front-head">{this.state.front1.h1}</div>
                                 <div className="card__side-para card__side--front-para">{this.state.front1.p1}</div>
                                 <img className="card__side-image card__side--front-image" src={s3p1} alt=""/>
                              </div>
                              <div className="card__side card__side--back card__side--back-1">
                                  <a href="#" class="btn btn-white">Explore &#8594;</a>
                              </div>
                     </div>

                     <div data-aos-once={true} data-aos="fade-right" className="card" data-aos-delay={350}>
                              <div  style={this.props.styles} className="card__side card__side--front">
                                 <div className="card__side-head card__side--front-head">{this.state.front2.h1}</div>
                                 <div className="card__side-para card__side--front-para">{this.state.front2.p1}</div>
                                 <img className="card__side-image card__side--front-image" src={s3p2} alt=""/>
                              </div>
                              <div className="card__side card__side--back card__side--back-1">
                                  <a href="#" class="btn btn-white">Explore &#8594;</a>
                              </div>
                     </div>

                     <div data-aos-once={true} data-aos="fade-right"  className="card" data-aos-delay={350}>
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <div className="card__side-head card__side--front-head">{this.state.front3.h1}</div>
                                 <div className="card__side-para card__side--front-para">{this.state.front3.p1}</div>
                                 <img className="card__side-image card__side--front-image" src={s3p3} alt=""/>
                              </div>
                              <div className="card__side card__side--back card__side--back-1">
                                  <a href="#" class="btn btn-white">Explore &#8594;</a>
                              </div>
                     </div>
               </div>


         </div>

         </>
     )
   }
 }


export default LandingScreen3;
