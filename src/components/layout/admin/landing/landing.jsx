import React, {Component} from "react"
import AdminLandingScreen1 from "./landing-screen-1/landing-screen-1"
import AdminLandingScreen2 from "./landing-screen-2/landing-screen-2"
import AdminLandingScreen3 from "./landing-screen-3/landing-screen-3"
import AdminLandingScreen4 from "./landing-screen-4/landing-screen-4"
import AdminLandingScreen5 from "./landing-screen-5/landing-screen-5"
import AdminLandingScreen6 from "./landing-screen-6/landing-screen-6"
import AdminLandingScreen7 from "./landing-screen-7/landing-screen-7"
import AdminLandingScreen8 from "./landing-screen-8/landing-screen-8"
import AdminLandingScreen9 from "./landing-screen-9/landing-screen-9"
import AdminLandingScreen10 from "./landing-screen-10/landing-screen-10"
import {Helmet} from "react-helmet"


class AdminLanding extends Component{

  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }


   render(){
     console.log(this.props);
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
              <AdminLandingScreen1 styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen2 styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen3 styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen4 styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen5 styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen6 styles={this.props.styles}/>

              <AdminLandingScreen8 styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen7 styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen9 styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen10 styles={this.props.styles}/>
              <hr  className="hr"/>

          </div>
          </>
     )
   }
 }


export default AdminLanding;
