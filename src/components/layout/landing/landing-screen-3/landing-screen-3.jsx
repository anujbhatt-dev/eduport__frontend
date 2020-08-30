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
     },
     back1:{
       for:"Students",
       detail:"International trade is one of the top industries of the new millennium. One can not just help in the growth of nations economy but, largely contribute to its profit."
     },
     back2:{
       for:"Professionals",
       detail:"while importing products can reduce costs, exporting products guarantee an increase in sale. Exporting product or working as an import-export agent, this industry offers exciting and fulfilling opportunities."
     },
     back3:{
       for:"Entrepreneurs",
       detail:"Exporting products is good to increase business. Instead of earning finance by selling products only in the local market, an entrepreneur can take its business abroad and discover new opportunities, diversify risk and make money internationally"
     }

   }

   // componentDidMount=()=>{
   //   Aos.init({duration:100});
   // }
   //
   // componentDidUpdate=()=>{
   //   Aos.init({duration:100});
   // }


   render(){

     return (<>
         <div style={{color:this.props.styles.color}} className="landingScreen3__head">{this.state.h3}</div>
         <div className="landingScreen3">
               <div data-aos="fade-right" data-aos-delay={150} data-aos-once={true} className="landingScreen3__cardWrapper">
                     <div  className="card">
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <div className="card__side-head card__side--front-head">{this.state.front1.h1}</div>
                                 <div className="card__side-para card__side--front-para">{this.state.front1.p1}</div>
                                 <img className="card__side-image card__side--front-image" src={s3p1} alt=""/>
                              </div>
                              <div className="card__side card__side--back card__side--back-1">
                                  <div className="for">{this.state.back1.for}</div>
                                  <div>{this.state.back1.detail}</div>
                              </div>
                     </div>

                     <div className="card" >
                              <div  style={this.props.styles} className="card__side card__side--front">
                                 <div className="card__side-head card__side--front-head">{this.state.front2.h1}</div>
                                 <div className="card__side-para card__side--front-para">{this.state.front2.p1}</div>
                                 <img className="card__side-image card__side--front-image" src={s3p2} alt=""/>
                              </div>
                              <div className="card__side card__side--back card__side--back-1">
                                  <div className="for">{this.state.back2.for}</div>
                                  <div>{this.state.back2.detail}</div>
                              </div>
                     </div>

                     <div className="card">
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <div className="card__side-head card__side--front-head">{this.state.front3.h1}</div>
                                 <div className="card__side-para card__side--front-para">{this.state.front3.p1}</div>
                                 <img className="card__side-image card__side--front-image" src={s3p3} alt=""/>
                              </div>
                              <div className="card__side card__side--back card__side--back-1">
                                  <div className="for">{this.state.back3.for}</div>
                                  <div>{this.state.back3.detail}</div>
                              </div>
                     </div>
               </div>


         </div>

         </>
     )
   }
 }


export default LandingScreen3;
