 import React, {Component} from "react"


 class Verify extends Component{

   state={
     id:"",
     secret:""
   }

   render(){

     return (
         <div className="adminVerificationWrapper">
            <form action="" className="adminVerification__form">
               <div>
                <label className="adminVerification__form-label" htmlFor="id">Admin Id</label><br/>
                <input className="adminVerification__form-input" placehonder="Enter Admin Id" type="text"/>
              </div>
              <div>
                <label className="adminVerification__form-label" htmlFor="id">Admin Secret</label><br/>
                <input className="adminVerification__form-input" placehonder="Enter Admin Secret" type="password"/>
              </div>
            </form>
        </div>
     )
   }
 }


export default Verify;
