import React, {Component} from "react"
import pic from "../../../../../assets/images/screen1.svg"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-elastic-carousel';


 class AdminLandingScreen6 extends Component{

   state = {
    data: [
            {
              icon:"life-ring",
              h1:"Build Your web Presense",
              h2:"5 lessons / 30 min",
              list:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."],
              listInput:""
            }
          ],
          cardInput:{
            icon:"",
            h1:"",
            h2:"",
            list:[],
            listInput:""
          }
  }

   componentDidMount=()=>{


   }


   onChangeHandler=(e)=>{
     let newState= this.state.moduleInput
     newState[e.target.name]=e.target.value;
     this.setState({
       ...newState
     })
   }

   addDetailHandler=()=>{
      let newState= this.state

        newState.data.push(newState.cardInput);
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

   onChangeHandler2 =(e,i)=>{
     let newState= this.state.data[i]
     newState[e.target.name]=e.target.value;
     this.setState({
        ...newState
     })
   }

   addDetailHandler2=(e,i)=>{
     console.log(i);
      let newState= this.state.data[i]
         console.log(newState);
        newState.list.push(newState.listInput);
        newState.listInput = ""
        this.setState({
          ...newState
        })

    }


    removeDetailHandler2=(i,ii)=>{
     let newState= this.state
     newState.data[i].list.splice(ii,1);
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
       <div className="landingScreen6__head">Module ({this.state.data.length})</div>
         <div style={this.props.styles} className="landingScreen6">
             <div id="landingScreen6__carousel" className="landingScreen6__carousel">
                 <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel'),"left",5,275,5)}} id="slide" className="fa fa-angle-left landingScreen6__arrow landingScreen6__arrow--left" aria-hidden="true"></i>
                  {this.state.data.map((data,i)=>{
                    return (
                      <div style={{position:"relative"}} data-aos="slide-left" data-aos-once={true} data-aos-offset="100px" data-aos-delay={100} key={i} id={"landingScreen6__"+i} className="landingScreen6__carousel-card">
                           <textarea value={data.icon} className="">

                           </textarea><br/>
                           <textarea value={data.h1} className="landingScreen6__carousel-card-h1">

                           </textarea><br/>
                           <textarea value={data.h2} className="landingScreen6__carousel-card-h2">

                           </textarea><br/>
                           <hr className="hr"/>
                           <div className="landingScreen6__carousel-card-list">
                                {data.list.map((listItem,ii)=>{
                                  return <><div style={{position:"relative"}} key={ii} className="landingScreen6__carousel-card-list-item">
                                             {listItem}
                                             <i onClick={()=>this.removeDetailHandler2(i,ii)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                                          </div>
                                          <br/>
                                          </>
                                })}
                                <textarea onChange={(e)=>this.onChangeHandler2(e,i)} name="listInput" value={data.listInput} style={{position:"relative"}} key={i} className="landingScreen6__carousel-card-list-item"></textarea>
                                <i onClick={(e)=>this.addDetailHandler2(e,i)}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
                           </div>
                       <i onClick={()=>this.removeDetailHandler(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                      </div>

                    )
                  })}
                  <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel'),"right",5,320,5)}} id="slide" className="fa fa-angle-right landingScreen6__arrow landingScreen6__arrow--right" aria-hidden="true"></i>
             </div>
             <i onClick={this.addDetailHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>

         </div></>
     )
   }
 }


export default AdminLandingScreen6;
