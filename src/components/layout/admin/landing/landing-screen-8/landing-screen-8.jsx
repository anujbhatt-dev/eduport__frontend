import React, {Component} from "react"
import s8p1 from "../../../../../assets/images/screen8-pic1.jpeg"
import cover from "../../../../../assets/images/mobile-cover.png"
import play from "../../../../../assets/images/google-play.svg"
import apple from "../../../../../assets/images/apple.svg"
import Aos from "aos"
import "aos/dist/aos.css"

class AdminLandingScreen8 extends Component{

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

  componentDidMount=()=>{
    Aos.init({duration:1000});
  }

  componentDidUpdate=()=>{
    Aos.init({duration:1000});
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

                             <textarea cols={50} rows={1} value={this.state.head} className="landingScreen8__appLink-box-head"></textarea>
                             <div className="landingScreen8__appLink-box-btns">
                                 <div className="landingScreen8__appLink-box-btns-apple">
                                    <i class="fa fa-apple" aria-hidden="true"></i>  apple
                                 </div>
                                 <div className="landingScreen8__appLink-box-btns-google">
                                    <i class="fa fa-play" aria-hidden="true"></i>   google
                                 </div>
                             </div>

                </div>
                <div data-aos="fade-left" data-aos-offset="100px" data-aos-once={true} data-aos-anchor="#features" className="landingScreen8__appLink-mobile">
                    <img src={cover} alt="mobilecover"/>
                </div>
             </div>
              <div id="features"  className="landingScreen8__features">
                {this.state.data.map((data,i)=>{
                  return <div className="landingScreen8__features-items">
                                 <div className="landingScreen8__features-items-iconWrapper">
                                      {i===0?icon0:i===1?icon1:i===2?icon2:i===3?icon3:i===4?icon4:icon5}
                                 </div>
                                 <div className="landingScreen8__features-items-item">
                                    <textarea cols={30} rows={1} value={data.for} className="landingScreen8__features-items-item-head"></textarea><br/>
                                    <textarea cols={30} rows={5} value={data.detail} className="landingScreen8__features-items-item-detail"></textarea>
                                </div>
                        </div>
                })}
              </div>
        </div>
    )
  }
}


export default AdminLandingScreen8;
