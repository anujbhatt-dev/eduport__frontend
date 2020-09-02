 import React, {Component} from "react"


 class AdminLandingScreen2 extends Component{

   state={
     module:{
       number:14,
       hours:12
     },
     about:{
       h2:"About Eduport: ",
       p2:"Eduport is training centre of Indiaport. We provide helping hand to India’s export business to ease its global trade. Eduport has taken an initiative to make people aware of various opportunities in the International market with our unique way of training, the participants. Eduport with its exclusive mastery aims to hasten the globalization of India and build an International business by educating and brushing exim skills of the working class."
     }
   }

   render(){

     return (
         <div style={{color:this.props.styles.color}} className="landingScreen2">
               <div className="landingScreen2__about">
                 <div className="landingScreen2__about-head">
                    {this.state.about.h2}
                 </div>
                 <div className="landingScreen2__about-para">
                    {this.state.about.p2}
                 </div>
               </div>
               <div className="landingScreen2__courseDetails">
                    <div className="landingScreen2__courseDetails-head">Course details</div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><i class="fa fa-bars landingScreen2__courseDetails-icon1" aria-hidden="true"></i> Modules: <span>{this.state.module.number}</span></div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-hours"><i class="fa fa-clock-o landingScreen2__courseDetails-icon1" aria-hidden="true"></i> Hours: <span>{this.state.module.hours}</span></div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-sundayZoomCall"><i class="fa fa-video-camera landingScreen2__courseDetails-icon1" aria-hidden="true"></i> sunday zoom call</div>

               </div>
               <div className="landingScreen2__courseDetails">
                    <div className="landingScreen2__courseDetails-head">Course features</div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><i class="fa fa-mobile landingScreen2__courseDetails-icon2" aria-hidden="true"></i> Mobile Courses</div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-hours"><i class="fa fa-video-camera landingScreen2__courseDetails-icon2" aria-hidden="true"></i> Video tutorial</div>
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-sundayZoomCall"><i class="fa fa-phone landingScreen2__courseDetails-icon2" aria-hidden="true"></i> support</div>

               </div>
         </div>
     )
   }
 }


export default AdminLandingScreen2;
