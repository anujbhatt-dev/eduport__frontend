import React, {Component} from "react"
import ReactWhatsapp from 'react-whatsapp';

 class Whatsapp extends Component{

   componentDidMount=()=>{

   }


   render(){

     return (

             <ReactWhatsapp element="div" number="+917895339580" message="Hello World!!!" >
             <div id="WAButton" className="whatsapp">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
             </div>
             </ReactWhatsapp>
     )
   }
 }


export default Whatsapp;
