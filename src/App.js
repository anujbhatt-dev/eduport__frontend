import React from 'react';
import './App.scss';
import ErrorBoundary from "./error-boundary/error-boundary"
import Layout from "./components/layout/layout"
import "aos/dist/aos.css"
import Aos from "aos"

class App extends React.Component {

   state={
     background1:"#fff",
     background2:"#DCDCDC",
     fontColor:"#000"
   }



   styleHandler=(e)=>{

    //alert( e.target.name )

    this.setState({[e.target.name]:e.target.value});
  }


  componentDidMount=()=>{
    Aos.init({duration:1000});
    window.scrollTo({top:0,behavior:"smooth"})
  }


  componentDidUpdate=()=>{
    Aos.init({duration:1000});
  }


  render(){
    // #f9f7d9
    // #f1f3f8
    const styles = {
      background1:this.state.background1,
      background2:this.state.background2,
      color:this.state.fontColor
    }

    return (
      <ErrorBoundary>
      <div style={{color:this.state.color}} className="App">
      <Layout styleHandler={this.styleHandler} styles={styles}/>

      </div>
      </ErrorBoundary>
    );
  }
}

export default App;
