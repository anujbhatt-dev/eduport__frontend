import React, {Component} from "react"
import {withRouter , Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import axios from "axios"


 class AdminBlogs extends Component{

   state={
     content:[
       {
         name:"Anuj BhAtt",
         date:"12-12-2020",
         title:"anuj Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ratione.",
         content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex ullam fugit porro mollitia sunt, cumque sapiente vel perferendis aliquid atque consequatur, quidem illum vitae, ut soluta quos deserunt delectus sequi, earum ipsam at voluptate. Minima, dolor tenetur neque error nulla reprehenderit. Iste esse similique necessitatibus sapiente, exercitationem cum quos debitis eligendi. Nemo autem nisi neque quos velit rerum, dolores, voluptatum ea nobis, laudantium necessitatibus repellendus ut a magni quidem aliquam, laborum qui deserunt exercitationem perspiciatis? In quia molestiae esse tenetur blanditiis rerum autem ut corporis sequi praesentium dolores ducimus commodi ipsa cumque atque corrupti, veritatis molestias, accusantium et, facilis asperiores magnam. Omnis, voluptate, sequi. Ad incidunt itaque maiores expedita illum, numquam ut hic mollitia sint ducimus fuga repellendus deleniti quidem impedit, blanditiis fugit harum nemo, inventore ipsam cumque laboriosam illo reprehenderit rem eveniet. Autem et eveniet molestias similique ratione adipisci odit ex commodi cum, animi id aspernatur beatae fugit tempora consequatur, consectetur aut iusto dolores numquam. Ducimus nobis doloremque, commodi eveniet molestias inventore provident velit, ad neque accusantium quia officia eaque ratione sint vitae voluptate, fuga? Tempore quod voluptas maiores unde vel veritatis harum voluptates molestiae, a adipisci officia minima eius iste, officiis, laborum iusto laudantium blanditiis atque ex reprehenderit nostrum. Quidem enim odio porro illo, quaerat vel libero velit magni voluptate, culpa nemo laborum hic voluptas in ea impedit blanditiis quas accusantium quis! Repellendus molestias neque vitae architecto explicabo minima corporis, consectetur, adipisci omnis cum nihil atque amet at ab excepturi odit voluptates dolorum nostrum, tempora officiis quod fugiat. At quasi dignissimos fugiat culpa nam quae dicta omnis, quia eligendi. Ut ad esse accusamus mollitia sequi velit doloremque vitae hic, tempora totam, quod cupiditate asperiores neque maiores, adipisci, inventore pariatur aliquam quis expedita vel aut harum aperiam unde vero. In sed vitae alias natus deleniti, excepturi, consectetur sequi iure expedita quidem eligendi obcaecati dolorum aliquid eveniet ut soluta recusandae enim. Repellat, voluptate, consectetur. Libero et numquam ipsam accusamus sint eius, animi quia. Ad ducimus tempora, fugit dignissimos amet. Ratione mollitia dolore debitis ipsa beatae deserunt delectus, voluptatum optio pariatur sequi totam temporibus voluptas eveniet laudantium et consequuntur omnis reprehenderit natus accusantium atque blanditiis tempora laboriosam provident necessitatibus. Facere cupiditate vel nostrum, incidunt eaque iste. A natus fugit amet hic quasi vel soluta ad distinctio, officia dolores, reprehenderit quae laboriosam autem pariatur possimus qui officiis, voluptatem fuga consequuntur odit voluptatum necessitatibus ut nesciunt! Veniam in ullam soluta non, facere corrupti sapiente tempore similique dicta iure aliquid. Nisi ratione tempore at consequatur fugit, cupiditate veritatis deserunt quae earum molestiae repudiandae iusto ab eligendi asperiores qui pariatur perspiciatis repellat, culpa aperiam, exercitationem molestias nobis quibusdam. Perferendis iusto, unde voluptatum et quia quas eum cupiditate doloribus autem consequatur voluptatem, animi beatae natus laudantium quis deserunt quibusdam minima mollitia nisi iure maxime quos ipsum optio deleniti. A aperiam eligendi dolor provident ipsa eaque aliquid animi quae reprehenderit fugiat saepe, ad vitae possimus quam corporis sit totam, vel omnis dolore. Voluptatem, est iusto. Eius ea inventore voluptatem libero quibusdam omnis neque itaque mollitia pariatur."
       },   
     ],
     dataInput:{
      name:"",
       data: new Date().toLocaleDateString(),
       title:"",
       content:""
     },loading:true,
   }


  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
   
    if(this.props.content.blogsPage)
    this.setState({content:[...this.props.content.blogsPage]});
   
  }

  componentDidUpdate=()=>{
   if(this.state.loading && this.props.content.blogsPage)
   this.setState({content:[...this.props.content.blogsPage ],loading:false})
  }

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
    window.location="http://localhost:3000/admin/verify";

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | Blogs"}</title>
              <link rel="canonical" href={"http://localhost:3000/blogs"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
           <div className="blogs">
                 {this.state.content.map((data,i)=>{
                   return <div style={{position:"relative"}} className="blogs__item">
                               <textarea name="title" onChange={(e)=>this.onChangeHandler(e,i)} value={data.title}  className="blogs__item-title"></textarea><br/>
                               <textarea name="name" onChange={(e)=>this.onChangeHandler(e,i)} value={data.name}  className="blogs__item-info">By <span className="blogs__item-info-by"></span> on <span className="blogs__item-info-date">{data.date}</span></textarea><br/>
                               <textarea name="content" onChange={(e)=>this.onChangeHandler(e,i)} value={data.content?data.content.slice(0,350):""}  className="blogs__item-content"> </textarea><Link to={{pathname:"/admin/blogs:"+data.title,state:{...data}}} className="blogs__item-readMore">...Read More</Link><br/>
                               <i onClick={()=>this.removeDetailHandler(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                          </div>
                 })}
                 <i onClick={this.addDetailHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
           </div>
           <button onClick={this.saveHandler} >Save</button>
           </>
     )
   }
 }


export default withRouter(AdminBlogs);
