import React, {Component} from "react"
import {Helmet} from "react-helmet"
import about from "../../../assets/images/about.svg"
import profile from "../../../assets/images/profile.svg"
import Aos from "aos"
import "aos/dist/aos.css"

class AboutUs extends Component{

  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
    Aos.init({duration:1500,once:true});
  }



  componentDidUpdate=()=>{
    Aos.init({duration:1500,once:true});
  }

   render(){

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | About"}</title>
              <link rel="canonical" href={"http://localhost:3000/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          <div className="aboutUs">
            <div className="aboutUs__screen1">
            <div className="aboutUs__screen1-text">
                 <div data-aos="flip-down" className="aboutUs__screen1-text-head">Story Behind</div>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</div><br/>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</div>
            </div>
              <div data-aos="fade-up-left" className="aboutUs__screen1-img">
                  <img  src={about} alt=""/>
              </div>
          </div>

          <div className="aboutUs__screen1">
          <div data-aos="fade-up-right" className="aboutUs__screen1-img">
              <img  src={about} alt=""/>
          </div>

            <div className="aboutUs__screen1-text">
                 <div data-aos="flip-down" data-aos="flip-down" className="aboutUs__screen1-text-head">Cause our business serves</div>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</div><br/>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</div>
            </div>

        </div>


        <div className="aboutUs__screen1">
        <div className="aboutUs__screen1-text">
             <div data-aos="flip-down" className="aboutUs__screen1-text-head">Business Model and How do we make our product</div>
             <div data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</div><br/>
             <div data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</div>
        </div>
          <div data-aos="fade-up-left" className="aboutUs__screen1-img">
              <img  src={about} alt=""/>
          </div>
      </div>

      <div className="aboutUs__screen1">
      <div data-aos="fade-up-right" className="aboutUs__screen1-img">
          <img  src={about} alt=""/>
      </div>

        <div className="aboutUs__screen1-text">
             <div data-aos="flip-down" data-aos="flip-down" className="aboutUs__screen1-text-head">What's Next</div>
             <div data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</div><br/>
             <div data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</div>
        </div>

    </div>

      <div className="aboutUs__face">
           <div className="aboutUs__face-head">Core Team</div>

           <div className="aboutUs__face-figures">

           <figure data-aos="slide-left">
               <img src={profile} alt="Trulli"/>
               <figcaption data-aos="flip-down"><span className="figcaption__span1">Mr.Lorem Ipsum</span><br/><span className="figcaption__span2">prod. manager</span></figcaption>
           </figure>

           <figure >
               <img src={profile} alt="Trulli"/>
               <figcaption data-aos="flip-down"><span className="figcaption__span1">Mr.Lorem Ipsum</span><br/><span className="figcaption__span2">prod. manager</span></figcaption>
           </figure>

               <figure data-aos="slide-right">
                   <img src={profile} alt="Trulli"/>
                   <figcaption data-aos="flip-down"><span className="figcaption__span1">Mr.Lorem Ipsum</span><br/><span className="figcaption__span2">prod. manager</span></figcaption>
               </figure>
           </div>

      </div>



          </div>
          </>
     )
   }
 }


export default AboutUs;
