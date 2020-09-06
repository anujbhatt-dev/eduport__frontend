import React, {Component} from "react"
import {withRouter , Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import axios from "axios"


 class AdminBlogs extends Component{

   state={
     content:[

     ],
     dataInput:{
      name:"",
       data: new Date().toLocaleDateString(),
       title:"",
       content:""
     },loading:true,
     page:0,
   }


   componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})

    axios.get("/v1/admin/content/blogs/").then(res=>{
      this.setState({content:res.data,loading:false});
  }).catch(err=>{this.setState({loading:false});alert("oops")})

  }

//  componentDidUpdate=()=>{
//   if(this.state.loading1)
//   axios.get("/v1/content/blogs/"+this.state.page).then(res=>{
//     console.log(res);
//     this.setState(state=>{return {content:state.content.concat(res.data.content),totalPages:res.data.totalPages,loading1:false}});
// }).catch(err=>{this.setState({loading1:false});alert("oops")})
//  }

   onChangeHandler=(e,i)=>{
    let content= [...this.state.content]
     content[i][e.target.name]=e.target.value;
     this.setState({
      content:content
   })
   }

   addDetailHandler=()=>{
    let content= [...this.state.content]
   content.push({
                  name:"",
                   data: new Date().toLocaleDateString(),
                   title:"",
                   content:""
                 });
    this.setState({
      content:content
   })

    }


    removeDetailHandler=(i)=>{
     let content= [...this.state.content]
     content.splice(i,1);
     this.setState({
        content:content
     })
   }



   saveHandler=(e)=>{
    e.preventDefault();
    axios.post("/v1/admin/blogspage",this.state.content).then(res=>{
       alert("saved");
    })
   }



   render(){

    if(!this.props.authenticated)
    window.location="http://vast-reaches-61761.herokuapp.com/admin/verify";


    if(this.state.loading)
    return <div  id="loader1"><div class="loader">Loading...</div></div>

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | Blogs"}</title>
              <link rel="canonical" href={"http://vast-reaches-61761.herokuapp.com/blogs"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
           <div className="blogs">
                 {this.state.content.map((data,i)=>{
                   return <div style={{position:"relative"}} className="blogs__item">
                               <textarea name="title" onChange={(e)=>this.onChangeHandler(e,i)} value={data.title}  className="blogs__item-title"></textarea><br/>
                               <textarea name="name" onChange={(e)=>this.onChangeHandler(e,i)} value={data.name}  className="blogs__item-info">By <span className="blogs__item-info-by"></span> on <span className="blogs__item-info-date">{data.date}</span></textarea><br/>
                               <textarea name="content" onChange={(e)=>this.onChangeHandler(e,i)} value={data.content}  className="blogs__item-content"> </textarea><Link to={{pathname:"/admin/blogs:"+data.title,state:{...data}}} className="blogs__item-readMore">...Read More</Link><br/>
                               <i onClick={()=>this.removeDetailHandler(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                          </div>
                 })}
                 <i onClick={this.addDetailHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
           </div>
           <button className="load__btn" onClick={this.saveHandler} >Save</button>
          
           </>
     )
   }
 }


export default withRouter(AdminBlogs);
