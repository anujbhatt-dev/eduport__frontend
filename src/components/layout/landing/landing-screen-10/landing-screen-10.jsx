import React, {Component} from "react"


class LandingScreen10 extends Component{

  state={
    by:"Narendra modi",
    thought:"Let us come together and think of ways India does not have to import but we export to the world."
  }

  render(){

    return (
        <div className="landingScreen10">
                <div className="landingScreen10__thought"><i className="quote fa fa-quote-left" aria-hidden="true"></i> {this.state.thought} <i className="quote fa fa-quote-right" aria-hidden="true"></i></div>
                <div className="landingScreen10__by">-{this.state.by}-</div>

        </div>
    )
  }
}


export default LandingScreen10;
