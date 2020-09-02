 import React, {Component} from "react"


 class AdminStudentList extends Component{

   state={
     data:[
       {
         name:"Anuj bhatt",
         email:"anujbhatt023@gmail.com",
         phone:"7895339580",
         preference:"preference",
         createdOn:"12-12-2020",
         marked:false
       },
       {
         name:"Anuj bhatt",
         email:"anujbhatt023@gmail.com",
         phone:"7895339580",
         preference:"preference",
         createdOn:"12-12-2020",
         marked:false
       },
       {
         name:"Anuj bhatt",
         email:"anujbhatt023@gmail.com",
         phone:"7895339580",
         preference:"preference",
         createdOn:"12-12-2020",
         marked:false
       },
       {
         name:"Anuj bhatt",
         email:"anujbhatt023@gmail.com",
         phone:"7895339580",
         preference:"preference",
         createdOn:"12-12-2020",
         marked:false
       },
       {
         name:"Anuj bhatt",
         email:"anujbhatt023@gmail.com",
         phone:"7895339580",
         preference:"preference",
         createdOn:"12-12-2020",
         marked:false
       },
     ],
     loading:false
   }

   markHandler=(id)=>{
    let newState = this.state
     newState.data[id].marked= !newState.data[id].marked
     this.setState({
       ...newState
     })
   }

    pageHandler=()=>{
        this.setState({
           loading:true
        })
        setTimeout(()=>{
          this.setState({
             loading:false
          })
        },2000)
    }

   render(){

     return (
       <div className="studentList">
            <nav className="studentList__nav">
                 <button className="studentList__nav-item">counceling done</button>
                 <button className="studentList__nav-item">counceling not done</button>
                 <button className="studentList__nav-item">enquiry done</button>
                 <button className="studentList__nav-item">enquiry not done</button>
            </nav>

            <table className="studentList__table">
                 <thead className="studentList__table-head">
                     <tr className="studentList__table-head-row">
                         <td  className="studentList__table-head-row-col">Name</td>
                         <td  className="studentList__table-head-row-col">Email</td>
                         <td  className="studentList__table-head-row-col">Mobile</td>
                         <td  className="studentList__table-head-row-col">Preference</td>
                         <td  className="studentList__table-head-row-col">Added On</td>
                         <td  className="studentList__table-head-row-col">Mark as Done</td>
                     </tr>
                 </thead>
                 <tbody className="studentList__table-body">
                 {this.state.data.map((data,i)=>{
                   return <tr className={(i%2)===0?"studentList__table-body-row studentList__table-body-row-1":"studentList__table-body-row studentList__table-body-row-2"}>
                             <td  className="studentList__table-body-row-col ">{data.name}</td>
                             <td  className="studentList__table-body-row-col">{data.email}</td>
                             <td  className="studentList__table-body-row-col">{data.phone}</td>
                             <td  className="studentList__table-body-row-col">{data.preference}</td>
                             <td  className="studentList__table-body-row-col">{data.createdOn}</td>
                             <td  className="studentList__table-body-row-col">{data.marked?<button onClick={()=>this.markHandler(i)} className="studentList__nav-item studentList__nav-item studentList__btn-unmark">Unmark</button>:<button onClick={()=>this.markHandler(i)} className="studentList__nav-item studentList__nav-item studentList__btn-mark ">Mark as done</button>}</td>
                         </tr>
                 })}
                 </tbody>

            </table>

                     <button className="load__btn" onClick={this.pageHandler}>{this.state.loading?"Loading...":"Load More"}</button>

       </div>
     )
   }
 }


export default AdminStudentList;
