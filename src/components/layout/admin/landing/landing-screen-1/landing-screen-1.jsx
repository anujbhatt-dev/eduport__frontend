import React, {Component} from "react"
import screen1 from "../../../../../assets/images/screen1.svg"
import screen1Blue from "../../../../../assets/images/screen1Blue.svg"
import Aos from "aos"
import "aos/dist/aos.css"


 class AdminLandingScreen1 extends Component{

   state= {
     screen1:{
      h1:"A platform created toease global trade.",
      p1:"Online video classes with in-depth & practical skills. Education made easy, affordable and fun!",
     }
   }

   componentDidMount=()=>{
     Aos.init({duration:1000});
   }

   componentDidUpdate=()=>{
     Aos.init({duration:1000});
   }


   render(){

     return (
        <div data-aos="zoom-out" data-aos-once={true}  style={{color:this.props.styles.color}} className="landingScreen1">
            <div className="landingScreen1__text">
               <div className="landingScreen1__text-head">
                  {this.state.screen1.h1}
               </div>
               <div className="landingScreen1__text-para">
                  {this.state.screen1.p1}
               </div>
            </div>
            <div className="landingScreen1__imageWrapper">
              <img src={screen1Blue} alt="" className="landingScreen1__imageWrapper-image"/>
            </div>
        </div>
     )
   }
 }


export default AdminLandingScreen1;
