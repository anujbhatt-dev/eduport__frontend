 import React, {Component} from "react"
 import s3p1 from "../../../../../assets/images/screen3-pic1.svg"
 import s3p2 from "../../../../../assets/images/screen3-pic2.svg"
 import s3p3 from "../../../../../assets/images/screen3-pic3.svg"
 import Aos from "aos"
 import "aos/dist/aos.css"

 class AdminLandingScreen3 extends Component{

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
         <textarea cols={50} row={5} value={this.state.h3} style={{color:this.props.styles.color}} className="landingScreen3__head"></textarea>
         <div className="landingScreen3">
               <div data-aos="flip-right" data-aos-delay={150} data-aos-once={true} className="landingScreen3__cardWrapper">
                     <div  className="">
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <textarea cols={50} row={5} value={this.state.front1.h1} className="card__side-head card__side--front-head"></textarea>
                                 <textarea cols={50} row={5} vslue={this.state.front1.p1} className="card__side-para card__side--front-para"></textarea>
                                 <img className="card__side-image card__side--front-image" src={s3p1} alt=""/>
                              </div>
                              <div className="">
                                  <textarea cols={50} row={5} value={this.state.back1.for} className="for"></textarea><br/>
                                  <textarea cols={50} row={5} value={this.state.back1.detail}></textarea>
                              </div>
                     </div>

                     <div className="" >
                              <div  style={this.props.styles} className="card__side card__side--front">
                                 <textarea cols={50} row={5} value={this.state.front2.h1} className="card__side-head card__side--front-head"></textarea>
                                 <textarea cols={50} row={5} value={this.state.front2.p1} className="card__side-para card__side--front-para"></textarea>
                                 <img className="card__side-image card__side--front-image" src={s3p2} alt=""/>
                              </div>
                              <div className="">
                                  <textarea cols={50} row={5} value={this.state.back2.for} className="for"></textarea><br/>
                                  <textarea cols={50} row={5} value={this.state.back2.detail}></textarea>
                              </div>
                     </div>

                     <div className="">
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <textarea cols={50} row={5} value={this.state.front3.h1} className="card__side-head card__side--front-head"></textarea>
                                 <textarea cols={50} row={5} value={this.state.front3.p1} className="card__side-para card__side--front-para"></textarea>
                                 <img className="card__side-image card__side--front-image" src={s3p3} alt=""/>
                              </div>
                              <div className="">
                                  <textarea cols={50} row={5} value={this.state.back3.for} className="for"></textarea><br/>
                                  <textarea cols={50} row={5} value={this.state.back3.detail}></textarea>
                              </div>
                     </div>
               </div>


         </div>

         </>
     )
   }
 }


export default AdminLandingScreen3;
