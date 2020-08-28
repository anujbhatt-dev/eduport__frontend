import React, {Component} from "react"
import LandingScreen1 from "./landing-screen-1/landing-screen-1"
import LandingScreen2 from "./landing-screen-2/landing-screen-2"
import LandingScreen3 from "./landing-screen-3/landing-screen-3"
import LandingScreen4 from "./landing-screen-4/landing-screen-4"
import LandingScreen5 from "./landing-screen-5/landing-screen-5"
import LandingScreen6 from "./landing-screen-6/landing-screen-6"
import LandingScreen7 from "./landing-screen-7/landing-screen-7"
import LandingScreen8 from "./landing-screen-8/landing-screen-8"
import LandingScreen9 from "./landing-screen-9/landing-screen-9"
import LandingScreen10 from "./landing-screen-10/landing-screen-10"
 class Landing extends Component{

   render(){

     return (
          <div className="landing">
               <input name="background" onChange={(e)=>this.props.styleHandler(e)} value={this.props.styles.background} type="color"/>
               <input name="fontColor" onChange={(e)=>this.props.styleHandler(e)} value={this.props.styles.background} type="color"/>
              <LandingScreen1 styles={this.props.styles}/>
              <LandingScreen2 styles={this.props.styles}/>
              <LandingScreen3 styles={this.props.styles}/>
              <LandingScreen4 styles={this.props.styles}/>
              <LandingScreen5 styles={this.props.styles}/>
              <LandingScreen6 styles={this.props.styles}/>
              <LandingScreen7 styles={this.props.styles}/>
              <LandingScreen8 styles={this.props.styles}/>
              <LandingScreen9 styles={this.props.styles}/>
              <LandingScreen10 styles={this.props.styles}/>
          </div>
     )
   }
 }


export default Landing;
