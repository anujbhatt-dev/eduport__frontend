 import React, {Component} from "react"


 class AdminLandingScreen2 extends Component{

   state={
     about:{
       h2:"About Eduport: ",
       p2:"Eduport is training centre of Indiaport. We provide helping hand to India’s export business to ease its global trade. Eduport has taken an initiative to make people aware of various opportunities in the International market with our unique way of training, the participants. Eduport with its exclusive mastery aims to hasten the globalization of India and build an International business by educating and brushing exim skills of the working class."
     },
     moduleList:[
       {
         icon:"times",
         for:"module",
         amount:"12"
       }
     ],
     moduleInput:{
       icon:"",
       for:"",
       amount:""
     },
     moduleList2:[
       {
         icon:"times",
         for:"module"
       }
     ],
     moduleInput2:{
       icon:"",
       for:""
     }
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
      if(newState.moduleInput.for.length!==0 && newState.moduleInput.icon.length!==0){
        newState.moduleList.push(newState.moduleInput);
        newState.moduleInput={icon:"",for:"",amount:""};
        this.setState({
          ...newState
        })
      }
    }


    removeDetailHandler=(i)=>{
     let newState= this.state
     newState.moduleList.splice(i,1);
     this.setState({
        ...newState
     })
   }

   onChangeHandler2=(e)=>{
     let newState= this.state.moduleInput2
     newState[e.target.name]=e.target.value;
     this.setState({
       ...newState
     })
   }

   addDetailHandler2=()=>{
      let newState= this.state
      if(newState.moduleInput2.for.length!==0 && newState.moduleInput2.icon.length!==0){
        newState.moduleList2.push(newState.moduleInput2);
        newState.moduleInput2={icon:"",for:"",amount:""};
        this.setState({
          ...newState
        })
      }
    }


    removeDetailHandler2=(i)=>{
     let newState= this.state
     newState.moduleList2.splice(i,1);
     this.setState({
        ...newState
     })
   }


   render(){

     return (
         <div style={{color:this.props.styles.color}} className="landingScreen2">
               <div className="landingScreen2__about">
                 <textarea cols={30} rows={1} value={this.state.about.h2} className="landingScreen2__about-head">

                 </textarea><br/>
                 <textarea  cols={50} rows={10} value={this.state.about.p2} className="landingScreen2__about-para">

                 </textarea>
               </div>
               <div className="landingScreen2__courseDetails">
                    <textarea value={"Course details"} className="landingScreen2__courseDetails-head"></textarea>
                    {this.state.moduleList.map((data,i)=>{
                      return <div style={{position:"relative"}} className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module">
                                    <i class={"fa fa-"+data.icon+" landingScreen2__courseDetails-icon1"} aria-hidden="true"></i> {data.for}
                                    <span>{data.amount!==""?":"+data.amount:null}</span>
                                    <i onClick={()=>this.removeDetailHandler(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                                  </div>
                    })}
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><input aria-hidden="true" name="icon" value={this.state.moduleInput.icon} onChange={this.onChangeHandler}/> <input name="for" type="text" onChange={this.onChangeHandler} value={this.state.moduleInput.for}/>:<input name="amount" type="text" onChange={this.onChangeHandler} value={this.state.moduleInput.amount}/> </div>
                    <i onClick={this.addDetailHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
               </div>
               <div className="landingScreen2__courseDetails">
                    <textarea value={"Course features"} className="landingScreen2__courseDetails-head"></textarea>
                     {this.state.moduleList2.map((data,i)=>{
                       return <div style={{position:"relative"}} className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module">
                                     <i class={"fa fa-"+data.icon+" landingScreen2__courseDetails-icon2"} aria-hidden="true"></i> {data.for}
                                     <i onClick={()=>this.removeDetailHandler2(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                                   </div>
                     })}
                     <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><input aria-hidden="true" name="icon" value={this.state.moduleInput2.icon} onChange={this.onChangeHandler2}/> <input name="for" type="text" onChange={this.onChangeHandler2} value={this.state.moduleInput2.for}/></div>
                     <i onClick={this.addDetailHandler2}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>

               </div>
         </div>
     )
   }
 }


export default AdminLandingScreen2;
