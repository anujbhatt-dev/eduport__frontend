import React, {Component} from "react"
import s8p1 from "../../../../assets/images/screen8-pic1.svg"

class LandingScreen8 extends Component{

  state={
    head:"Designed for your busy life.",
    data:[
      {
        for:"Complete all 26 modules",
        detail:"Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz."
      },
      {
        for:"Take the final exam",
        detail:"Pass the final 40-question exam and get certified."
      },
      {
        for:"Share your certificate",
        detail:"Download the showcase your new qualification on LinkedIn and your CV."
      },
      {
        for:"Complete all 26 modules",
        detail:"Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz."
      },
      {
        for:"Take the final exam",
        detail:"Pass the final 40-question exam and get certified."
      },
      {
        for:"Share your certificate",
        detail:"Download the showcase your new qualification on LinkedIn and your CV."
      }
    ]
  }

  render(){
    let icon0 = <i className="fa fa-folder folder" aria-hidden="true"></i>
    let icon1 = <i className="fa fa-pause pause" aria-hidden="true"></i>
    let icon2 = <i className="fa fa-life-ring life-ring" aria-hidden="true"></i>
    let icon3 = <i className="fa fa-download download" aria-hidden="true"></i>
    let icon4 = <i className="fa fa-trophy trophy" aria-hidden="true"></i>
    let icon5 = <i className="fa fa-file-text file" aria-hidden="true"></i>

    return (
        <div style={this.props.styles} className="landingScreen8">
             
             <div className="landingScreen8__appLink" >
                <div className="landingScreen8__appLink-box">

                             <div className="landingScreen8__appLink-box-head">{this.state.head}</div>
                             <div className="landingScreen8__appLink-box-btns">
                                 <div className="landingScreen8__appLink-box-btns-apple">
                                     apple
                                 </div>
                                 <div className="landingScreen8__appLink-box-btns-google">
                                     google
                                 </div>
                             </div>

                </div>
                <div className="landingScreen8__appLink-mobile">
                    <img src={s8p1} alt="mobile"/>
                </div>
             </div>
              <div  className="landingScreen8__features">
                {this.state.data.map((data,i)=>{
                  return <div className="landingScreen8__features-items">
                                 <div className="landingScreen8__features-items-iconWrapper">
                                      {i===0?icon0:i===1?icon1:i===2?icon2:i===3?icon3:i===4?icon4:icon5}
                                 </div>
                                 <div className="landingScreen8__features-items-item">
                                    <div className="landingScreen8__features-items-item-head">{data.for}</div>
                                    <div className="landingScreen8__features-items-item-detail">{data.detail}</div>
                                </div>
                        </div>
                })}
              </div>
        </div>
    )
  }
}


export default LandingScreen8;
