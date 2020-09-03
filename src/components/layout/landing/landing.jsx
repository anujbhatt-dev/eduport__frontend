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
import {Helmet} from "react-helmet"


class Landing extends Component{




  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }

   render(){
     // <input name="background" onChange={(e)=>this.props.styleHandler(e)} value={this.props.styles.background} type="color"/>
     // <input name="fontColor" onChange={(e)=>this.props.styleHandler(e)} value={this.props.styles.background} type="color"/>

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort"}</title>
              <link rel="canonical" href={"http://localhost:3000/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          <div className="landing">
              <LandingScreen1 styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen2 styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen3 styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen4 styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen5 styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen6 styles={this.props.styles}/>

              <LandingScreen8 styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen7 styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen9 styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen10 styles={this.props.styles}/>
              <hr  className="hr"/>

          </div>
          </>
     )
   }
 }


export default Landing;
