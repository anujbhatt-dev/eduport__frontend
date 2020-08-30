import React, {Component} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import ashoka from "../../../../assets/images/ashoka.svg"

class LandingScreen10 extends Component{

  state={
    by:"Narendra modi",
    thought:"Let us come together and think of ways India does not have to import but we export to the world."
  }


  componentDidMount=()=>{
    Aos.init({duration:1000});
  }

  componentDidUpdate=()=>{
    Aos.init({duration:1000});
  }


  render(){

    return (
        <div style={{color:this.props.styles.color}} className="landingScreen10">

                <div data-aos="fade-in" data-aos-once={true} data-aos-offset="100px" data-aos-delay={200} className="landingScreen10__thought"><i className="quote fa fa-quote-left" aria-hidden="true"></i> {this.state.thought} <i className="quote fa fa-quote-right" aria-hidden="true"></i></div>
                <div data-aos="fade-in" data-aos-once={true} data-aos-offset="100px" data-aos-delay={200} className="landingScreen10__by">-{this.state.by}-</div>

        </div>
    )
  }
}


export default LandingScreen10;
