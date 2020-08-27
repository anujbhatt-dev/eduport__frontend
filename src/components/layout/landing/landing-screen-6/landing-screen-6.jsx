import React, {Component} from "react"
import pic from "../../../../assets/images/screen1.svg"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-elastic-carousel';


 class LandingScreen6 extends Component{

   state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
    ],
    moduleNo:14
  }

   componentDidMount=()=>{
     document.getElementsByClassName('rec-arrow').id = "newId"
   }


   render(){

     return (
         <div className="landingScreen6">
         <div className="landingScreen6__head">Module ({this.state.moduleNo})</div>
         <Carousel className="carousel">
                 {this.state.items.map(item => <div  className="landingScreen3__cardWrapper" key={item.id}>
                 <div  className="card">
                          <div style={this.props.styles} className="card__side card__side--front">
                             <div className="card__side-head card__side--front-head">hello</div>
                             <div className="card__side-para card__side--front-para">hello</div>
                             <img className="card__side-image card__side--front-image" src={pic} alt=""/>
                          </div>
                          <div className="card__side card__side--back card__side--back-1">
                              <a href="#" class="btn btn-white">Explore &#8594;</a>
                          </div>
                 </div>
                 <div className="card">
                          <div  style={this.props.styles} className="card__side card__side--front">
                             <div className="card__side-head card__side--front-head">hello</div>
                             <div className="card__side-para card__side--front-para">hello</div>
                             <img className="card__side-image card__side--front-image" src={pic} alt=""/>
                          </div>
                          <div className="card__side card__side--back card__side--back-1">
                              <a href="#" class="btn btn-white">Explore &#8594;</a>
                          </div>
                 </div>
                 <div className="card">
                          <div  style={this.props.styles} className="card__side card__side--front">
                             <div className="card__side-head card__side--front-head">hello</div>
                             <div className="card__side-para card__side--front-para">hello</div>
                             <img className="card__side-image card__side--front-image" src={pic} alt=""/>
                          </div>
                          <div className="card__side card__side--back card__side--back-1">
                              <a href="#" class="btn btn-white">Explore &#8594;</a>
                          </div>
                 </div>

                   </div>)}
         </Carousel>

         </div>
     )
   }
 }


export default LandingScreen6;
