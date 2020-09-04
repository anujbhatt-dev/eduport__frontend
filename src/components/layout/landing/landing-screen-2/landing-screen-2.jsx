 import React, {Component} from "react"


 class LandingScreen2 extends Component{

  state={
   
    r2h1:"About Eduport: ",
    r2p1:"Eduport is training centre of Indiaport. ",
    r2h2:"",
    r2h3:"" ,
  r2list1:[
    {
      icon:"times",
      p1:"module",
      p2:"12"
    }
  ],
  moduleInput:{
    icon:"",
    p1:"",
    p2:""
  },
  r2list2:[
    {
      icon:"times",
      p1:"module"
    }
  ],
  moduleInput2:{
    icon:"",
    p1:""
  },
  loading:true,
}

componentDidMount=()=>{
 window.scrollTo({top:0,behavior:"smooth"})

 if(this.props.content)
 this.setState({...this.props.content });

}

componentDidUpdate=()=>{
if(this.state.loading && this.props.content.r2h1)

  this.setState({...this.props.content,loading:false})}


   render(){

     return (
         <div style={{color:this.props.styles.color}} className="landingScreen2">
               <div className="landingScreen2__about">
                 <div className="landingScreen2__about-head">
                    {this.state.r2h1}
                 </div>
                 <div className="landingScreen2__about-para">
                    {this.state.r2p1}
                 </div>
               </div>
               <div className="landingScreen2__courseDetails">
                    <div className="landingScreen2__courseDetails-head">{this.state.r2h2}</div>
                    {this.state.r2list1.map(data=><div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><i class={"fa fa-"+data.icon+" landingScreen2__courseDetails-icon1"} aria-hidden="true"></i>{data.p1} <span>{data.p2}</span></div>
)}
                    {/* <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><i class="fa fa-bars landingScreen2__courseDetails-icon1" aria-hidden="true"></i> Modules: <span>{this.state.module.number}</span></div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-hours"><i class="fa fa-clock-o landingScreen2__courseDetails-icon1" aria-hidden="true"></i> Hours: <span>{this.state.module.hours}</span></div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-sundayZoomCall"><i class="fa fa-video-camera landingScreen2__courseDetails-icon1" aria-hidden="true"></i> sunday zoom call</div> */}

               </div>
               <div className="landingScreen2__courseDetails">
                   
                    <div className="landingScreen2__courseDetails-head">{this.state.r2h3}</div>
                    {this.state.r2list2.map(data=><div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><i class={"fa fa-"+data.icon+" landingScreen2__courseDetails-icon2"} aria-hidden="true"></i> {data.p1}</div>
)}
                    {/* <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><i class="fa fa-mobile landingScreen2__courseDetails-icon2" aria-hidden="true"></i> Mobile Courses</div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-hours"><i class="fa fa-video-camera landingScreen2__courseDetails-icon2" aria-hidden="true"></i> Video tutorial</div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-sundayZoomCall"><i class="fa fa-phone landingScreen2__courseDetails-icon2" aria-hidden="true"></i> support</div> */}

               </div>
         </div>
     )
   }
 }


export default LandingScreen2;
