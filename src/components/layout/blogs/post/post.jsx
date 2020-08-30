import React, {Component} from "react"
import {withRouter , Link} from "react-router-dom"

 class Post extends Component{

   componentDidMount=()=>{
     window.scrollTo({top:0,behavior:"smooth"})
   }


   render(){
     // <div className="Post__date">{this.props.history.location.state.state.date}</div>
     // <div className="Post__title">{this.props.history.location.state.state.title}</div>
     // <div className="Post__content">{this.props.history.location.state.state.content}</div>


     return (
          <div className="post">
          <div className="post-title">{this.props.history.location.state.title}</div>
          <div className="post-info">By <span className="post-info-by">{this.props.history.location.state.by}</span> on <span className="post-info-date">{this.props.history.location.state.date}</span></div>
          <div  className="post-content">{this.props.history.location.state.content}</div>
          <Link to={"/blogs"} className="post-goBack">...blogs</Link>
          </div>
     )
   }
 }


export default withRouter(Post);
