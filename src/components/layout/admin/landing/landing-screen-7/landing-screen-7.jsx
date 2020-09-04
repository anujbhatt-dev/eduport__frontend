import React, {Component} from "react"
// import Carousel from 'react-elastic-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


class AdminLandingScreen7 extends Component{

  state = {
   data: [
        {
          name:"Anuj",
          review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam omnis hic laboriosam non, sequi fugit nostrum esse pariatur officia nemo ficia nem.",
          rating:"4.5"
        }
   ],
   dataInput:{

       name:"",
       review:"",
       rating:""

   }
 }


 onChangeHandler=(e)=>{
   let newState= this.state.dataInput
   newState[e.target.name]=e.target.value;
   this.setState({
     ...newState
   })
 }

 addDetailHandler=()=>{
    let newState= this.state
      newState.data.push(newState.dataInput);
      this.setState({
        ...newState
      })

  }


  removeDetailHandler=(i)=>{
   let newState= this.state
   newState.data.splice(i,1);
   this.setState({
      ...newState
   })
 }




     sideScroll=(element, direction, speed, distance, step)=> {
      let scrollAmount = 0;
       let slideTimer = setInterval(()=> {
         if (direction == 'left') {
           element.scrollLeft -= step;
         } else {
           element.scrollLeft += step;
         }
         scrollAmount += step;
         if (scrollAmount >= distance) {
           window.clearInterval(slideTimer);
         }
       }, speed);
     }

  render(){

    return (<>
      <textarea value={"Reviews"} className="landingScreen6__head landingScreen7__head"></textarea>
        <div style={this.props.styles} className="landingScreen6 landingScreen7">
            <div  id="landingScreen6__carousel2" className="landingScreen6__carousel landingScreen7__carousel">
                <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel2'),"left",5,275,5)}} id="slide" className="fa fa-angle-left landingScreen6__arrow landingScreen6__arrow--left" aria-hidden="true"></i>
                 {this.state.data.map((data,i)=>{
                   return (
                     <div style={{position:"relative"}} data-aos="slide-left" data-aos-once={true} data-aos-delay={100} key={i} id={"landingScreen6__"+i} className="landingScreen6__carousel-card landingScreen7__carousel-card">
                         <textarea value={data.review} className="landingScreen7__carousel-card-review"> </textarea><br/>
                         <textarea value={"-"+data.name} className="landingScreen7__carousel-card-name"></textarea><br/>
                         <textarea value={data.rating} className="landingScreen7__carousel-card-rating"> ⭐</textarea><br/>
                          <i onClick={()=>this.removeDetailHandler(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                     </div>
                   )
                 })}
                 <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel2'),"right",5,320,5)}} id="slide" className="fa fa-angle-right landingScreen6__arrow landingScreen6__arrow--right" aria-hidden="true"></i>
            </div>
              <i onClick={this.addDetailHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
        </div></>
    )
  }
}


export default AdminLandingScreen7;
