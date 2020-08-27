import React, {Component} from "react"
import Carousel from 'react-elastic-carousel';


class LandingScreen7 extends Component{

  state = {
   items: [
     {
       id: 1,
       reviews: [
         {
           name:"Anuj BHatt",
           review:"very good review very good review very good review very good review"
         },
         {
           name:"Anuj BHatt",
           review:"very good review very good review very good review very good review"
         },
         {
           name:"Anuj BHatt",
           review:"very good review very good review very good review very good review"
         },
       ]
     },
     {
       id: 1,
       reviews: [
         {
           name:"Anuj BHatt",
           review:"very good review very good review very good review very good review"
         },
         {
           name:"Anuj BHatt",
           review:"very good review very good review very good review very good review"
         },
         {
           name:"Anuj BHatt",
           review:"very good review very good review very good review very good review"
         },
       ]
     },
     {
       id: 1,
       reviews: [
         {
           name:"Anuj BHatt",
           review:"very good review very good review very good review very good review"
         },
         {
           name:"Anuj BHatt",
           review:"very good review very good review very good review very good review"
         },
         {
           name:"Anuj BHatt",
           review:"very good review very good review very good review very good review"
         },
       ]
     },


   ]
 }

  render(){

    return (
        <div className="landingScreen7">
        <div className="landingScreen6__head">Reviews</div>
        <Carousel>
                {this.state.items.map((container,i) => <div style={{display:"flex"}} key={container.id}>
                       <div  style={this.props.styles} className="landingScreen7__container">
                           {container.reviews.map((review,i)=>{
                      return   <div className="landingScreen7__container-review">
                                    <div className="landingScreen7__container-review-name">{review.name}</div>
                                    <div className="landingScreen7__container-review-detail">{review.review}</div>
                               </div>
                           })}
                       </div>
                  </div>)}
        </Carousel>

        </div>
    )
  }
}


export default LandingScreen7;
