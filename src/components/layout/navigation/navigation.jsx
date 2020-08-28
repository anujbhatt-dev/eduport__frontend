import React, {Component} from "react"
import Modal from "../../../UI/modal/modal"
import Backdrop from "../../../UI/backdrop/backdrop"
import {NavLink, withRouter} from "react-router-dom"

class Navigation extends Component{

   state={
     show:false
   }

  modalHandler=()=>{
    if(this.state.show){
      this.setState({
        show:false
      })
    }else{
      this.setState({
        show:true
      })
    }
  }

   mobileNavHandler=(id)=>{
     this.modalHandler();
     this.props.history.push("/"+id)
   }

  clickHandler=()=>{
    this.props.history.push("/");
  }

  render(){


    return (
         <div style={this.props.styles} className="navigation">
            <i onClick={this.modalHandler} style={this.state.show?{}:{}} className={this.state.show?"fa fa-times bars":"fa fa-bars bars"} aria-hidden="true"></i>
            <div className="logo">
                 <div className="logo__name">
                      <div onClick={this.clickHandler} className="logo__name-main">Eduport</div>
                      <div className="logo__name-secondary">By IndiaPort</div>
                 </div>
                 <div className="logo__tagline">
                      Making India the World's factory
                 </div>
            </div>
            <nav className="navigation__items">
                  <NavLink activeStyle={{color: "#0f3460"}} to="/pricing"><div className="navigation__items-item">Pricing</div></NavLink>
                  <NavLink activeStyle={{color: "#0f3460"}} to="/aboutUs"><div className="navigation__items-item">About</div></NavLink>
                  <NavLink activeStyle={{color: "#0f3460"}} to="/blogs"><div className="navigation__items-item">blogs</div></NavLink>
                  <NavLink activeStyle={{color: "#0f3460"}} to="/contactUs"><div className="navigation__items-item">contact</div></NavLink>
            </nav>

            <Modal clicked={this.modalHandler} show={this.state.show}>
                <nav className={this.state.show?"ModalNavigation__items":null}>
                      <div onClick={()=>this.mobileNavHandler("pricing")} className="ModalNavigation__items-item">Pricing</div>
                      <div onClick={()=>this.mobileNavHandler("aboutUs")} className="ModalNavigation__items-item">About us</div>
                      <div onClick={()=>this.mobileNavHandler("blogs")} className="ModalNavigation__items-item">blogs.</div>
                      <div onClick={()=>this.mobileNavHandler("contactUs")} className="ModalNavigation__items-item">contact us</div>
                </nav>
            </Modal>
         </div>
    )
    // <Backdrop  clicked={this.modalHandler} show={this.state.show}/>
  }
}


export default withRouter(Navigation);
