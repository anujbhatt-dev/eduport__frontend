import React from 'react';
import './App.scss';
import ErrorBoundary from "./error-boundary/error-boundary"
import Layout from "./components/layout/layout"

class App extends React.Component {

   state={
     background:"#fff",
     fontColor:"#000"
   }

   

   styleHandler=(e)=>{

    //alert( e.target.name )

    this.setState({[e.target.name]:e.target.value});
  }




  render(){
    // #f9f7d9
    // #f1f3f8
    const styles = {
      background:this.state.background,
      color:this.state.fontColor
    }

    return (
      <ErrorBoundary>
      <div style={{background:this.state.background,color:this.state.color}} className="App">
      <Layout styleHandler={this.styleHandler} styles={styles}/>

      </div>
      </ErrorBoundary>
    );
  }
}

export default App;
