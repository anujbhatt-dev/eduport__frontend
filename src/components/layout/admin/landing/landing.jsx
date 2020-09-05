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
import axios from "axios"
import { withRouter } from "react-router-dom"


class AdminLanding extends Component{

  state={
    content:{},
    loading:true,
  }

  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})

    axios.get("/v1/content/landing").then(res=>{
      this.setState({content:res.data,loading:false});
  }).catch(err=>{this.setState({loading:false});alert("oops")})

  }


  parentLandingScreen1=(data)=>{

    this.setState({content:{... data}});
  }

  parentLandingScreen2=(data)=>{

//  let   r2h1=data.r2h1 ;
//  let   r2p1=data.r2p1 ;
//  let   r2h2=data.r2h2 ;
//  let r2list1=data.r2list1;
//  let r2list2=data.r2list2;
 this.setState({content:{... data}});
 console.log(data)

  }

  parentLandingScreen=(data)=>{
    this.setState({content:{... data}});
    console.log(data)
  }

  saveHandler=(e)=>{
    e.preventDefault();
    axios.post("/v1/admin/landingpage",this.state.content).then(res=>{
       alert("saved");
    })
   }



   render(){




    if(!this.props.authenticated)
       window.location="http://vast-reaches-61761.herokuapp.com/admin/verify";


       if(this.state.loading)
       return <div  id="loader1"><div class="loader">Loading...</div></div>

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort"}</title>
              <link rel="canonical" href={"http://vast-reaches-61761.herokuapp.com/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
        { !this.state.content.r1h1?null: <div className="landing">
              <AdminLandingScreen1 parentLandingScreen1={this.parentLandingScreen1} content={this.state.content}     styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen2  parentLandingScreen2={this.parentLandingScreen2} content={this.state.content}     styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen3 parentLandingScreen={this.parentLandingScreen}   content={this.state.content}   styles={this.props.styles}/>
              <hr  className="hr"/>
              {/* <AdminLandingScreen4  parentLandingScreen={this.parentLandingScreen}   content={this.state.content}   content={this.state.content}   styles={this.props.styles}/>
              <hr  className="hr"/>      */}
              <AdminLandingScreen5 parentLandingScreen={this.parentLandingScreen}   content={this.state.content}   content={this.state.content}   styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen6  parentLandingScreen={this.parentLandingScreen}   content={this.state.content}   styles={this.props.styles}/>

              <AdminLandingScreen8 parentLandingScreen={this.parentLandingScreen}   content={this.state.content}  content={this.state.content}   styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen7  parentLandingScreen={this.parentLandingScreen}    content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen9  parentLandingScreen={this.parentLandingScreen}   content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen10  parentLandingScreen={this.parentLandingScreen}  content={this.state.content}   styles={this.props.styles}/>
              <hr  className="hr"/>
              <button className="load__btn" onClick={this.saveHandler}>Save</button>

          </div>}
          </>
     )
   }
 }


export default  AdminLanding;
