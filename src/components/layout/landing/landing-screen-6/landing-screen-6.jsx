import React, {Component} from "react"
import pic from "../../../../assets/images/screen1.svg"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-elastic-carousel';


 class LandingScreen6 extends Component{

   state = {
    items: [
      {
        id: 1,
        data: [
          {
            icon:"life-ring",
            h1:"Build Your web Presense",
            h2:"5 lessons / 30 min",
            list:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
          },
          {
            icon:"bar-chart",
            h1:"Build Your web Presense",
            h2:"5 lessons / 30 min",
            list:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
          },
          {
            icon:"camera",
            h1:"Build Your web Presense",
            h2:"5 lessons / 30 min",
            list:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
          },
        ]
      },
      {
        id: 1,
        data: [
          {
            icon:"life-ring",
            h1:"Build Your web Presense",
            h2:"5 lessons / 30 min",
            list:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
          },
          {
            icon:"bar-chart",
            h1:"Build Your web Presense",
            h2:"5 lessons / 30 min",
            list:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
          },
          {
            icon:"camera",
            h1:"Build Your web Presense",
            h2:"5 lessons / 30 min",
            list:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
          },
        ]
      },
    ],
    moduleNo:14
  }

   componentDidMount=()=>{
     document.getElementsByClassName('rec-arrow').id = "newId"
   }


   render(){

     return (
         <div style={this.props.styles} className="landingScreen6">
         <div className="landingScreen6__head">Module ({this.state.moduleNo})</div>
         <Carousel >
                 {this.state.items.map(item => <div  className="landingScreen6__Wrapper" key={item.id}>
                 {item.data.map(data=>{
                   return   <div  className="landingScreen6__Wrapper-card">
                               <div className="landingScreen6__Wrapper-card-iconWrapper"><i className={"landingScreen6__Wrapper-card-iconWrapper-icon fa fa-"+data.icon} aria-hidden="true"></i></div>
                               <div className="landingScreen6__Wrapper-card-head">{data.h1}</div>
                               <div className="landingScreen6__Wrapper-card-time">{data.h2}</div>
                               <div className="landingScreen6__Wrapper-card-list">
                                   {data.list.map(listItem=>{
                                     return <div className="landingScreen6__Wrapper-card-list-item">{listItem}</div>
                                   })}
                               </div>
                            </div>})
                 }


                   </div>)}
         </Carousel>

         </div>
     )
   }
 }


export default LandingScreen6;
