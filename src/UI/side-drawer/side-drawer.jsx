 import React, {PureComponent} from "react"
import Flag from "react-world-flags"

 class SideDrawer extends PureComponent{

   state={
     stage:true,
    }







   render(){

     return (
        <div className={"sideDrawer "+this.props.toggler}>
            <div className="sideDrawer__container">
              {/* <i onClick={this.props.clicked} className="fa fa-times sideDrawer__container-cross" aria-hidden="true"></i> */}
              <div className="sideDrawer__container-logo"></div>
            </div>
        </div>
     )
   }
 }


export default SideDrawer;
