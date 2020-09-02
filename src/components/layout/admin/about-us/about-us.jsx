import React, {Component} from "react"
import {Helmet} from "react-helmet"

class AdminAboutUs extends Component{

  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }

   render(){

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | About"}</title>
              <link rel="canonical" href={"http://localhost:3000/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          <div className="aboutUs">aboutUs</div>
          </>
     )
   }
 }


export default AdminAboutUs;
