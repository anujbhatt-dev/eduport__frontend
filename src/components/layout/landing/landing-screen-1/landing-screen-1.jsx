import React, {Component} from "react"
import screen1 from "../../../../assets/images/screen1.svg"

 class LandingScreen1 extends Component{

   state= {
     screen1:{
      h1:"A platform created toease global trade.",
      p1:"Online video classes with in-depth & practical skills. Education made easy, affordable and fun!",
     }
   }


   render(){

     return (
        <div className="landingScreen1">
            <div className="landingScreen1__text">
               <div className="landingScreen1__text-head">
                  {this.state.screen1.h1}
               </div>
               <div className="landingScreen1__text-para">
                  {this.state.screen1.p1}
               </div>
            </div>
            <div className="landingScreen1__imageWrapper">
              <img src={screen1} alt="" className="landingScreen1__imageWrapper-image"/>
            </div>
        </div>
     )
   }
 }


export default LandingScreen1;
