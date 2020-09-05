import React, {Component} from "react"
import {Helmet} from "react-helmet"
import about from "../../../../assets/images/about.svg"
import profile from "../../../../assets/images/profile.svg"

class AdminAboutUs extends Component{

  state={

  }

  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }

   render(){
    if(!this.props.authenticated)
    window.location="http://localhost:3000/admin/verify";

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | About"}</title>
              <link rel="canonical" href={"http://vast-reaches-61761.herokuapp.com/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          <div className="aboutUs">
            <div className="aboutUs__screen1">
            <div className="aboutUs__screen1-text">
                 <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-head">Story Behind</textarea>
                 <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</textarea><br/>
                 <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</textarea>
            </div>
              <div data-aos="fade-up-left" className="aboutUs__screen1-img">
                  <img  src={about} alt=""/>
              </div>
          </div>

          <div className="aboutUs__screen1">

            <div className="aboutUs__screen1-text">
                 <textarea value={""} data-aos="flip-down" data-aos="flip-down" className="aboutUs__screen1-text-head">Cause our business serves</textarea>
                 <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</textarea><br/>
                 <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</textarea>
            </div>

            <div data-aos="fade-up-right" className="aboutUs__screen1-img">
                <img  src={about} alt=""/>
            </div>


        </div>


        <div className="aboutUs__screen1">
        <div className="aboutUs__screen1-text">
             <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-head">Business Model and How do we make our product</textarea>
             <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</textarea><br/>
             <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</textarea>
        </div>
          <div data-aos="fade-up-left" className="aboutUs__screen1-img">
              <img  src={about} alt=""/>
          </div>
      </div>

      <div className="aboutUs__screen1">


        <div className="aboutUs__screen1-text">
             <textarea value={""} data-aos="flip-down" data-aos="flip-down" className="aboutUs__screen1-text-head">What's Next</textarea>
             <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</textarea><br/>
             <textarea value={""} data-aos="flip-down" className="aboutUs__screen1-text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut consequuntur error architecto eum labore temporibus debitis distinctio blanditiis voluptatem, velit praesentium vel ullam, recusandae mollitia doloremque. Possimus cupiditate quos illo quas necessitatibus, quo nisi cum rerum doloribus hic non atque totam, pariatur voluptatum ducimus ratione</textarea>
        </div>


        <div data-aos="fade-up-right" className="aboutUs__screen1-img">
            <img  src={about} alt=""/>
        </div>

    </div>

      <div className="aboutUs__face">
           <textarea value={""} className="aboutUs__face-head">Core Team</textarea>

           <div className="aboutUs__face-figures">

           <figure data-aos="slide-left">
               <img src={profile} alt="Trulli"/>
               <figcaption data-aos="flip-down"><textarea value={""} className="figcaption__span1">Mr.Lorem Ipsum</textarea><br/><textarea value={""} className="figcaption__span2">prod. manager</textarea></figcaption>
               <input type="text"/>
           </figure>

           <figure >
               <img src={profile} alt="Trulli"/>
               <figcaption data-aos="flip-down"><textarea value={""} className="figcaption__span1">Mr.Lorem Ipsum</textarea><br/><textarea value={""} className="figcaption__span2">prod. manager</textarea></figcaption>
                <input type="text"/>
           </figure>

               <figure data-aos="slide-right">
                   <img src={profile} alt="Trulli"/>
                   <figcaption data-aos="flip-down"><textarea value={""} className="figcaption__span1">Mr.Lorem Ipsum</textarea><br/><textarea value={""} className="figcaption__span2">prod. manager</textarea></figcaption>
                   <input type="text"/>
               </figure>

               <figure data-aos="slide-right">
                   <img src={profile} alt="Trulli"/>
                   <figcaption data-aos="flip-down"><textarea value={""} className="figcaption__span1">Mr.Lorem Ipsum</textarea><br/><textarea value={""} className="figcaption__span2">prod. manager</textarea></figcaption>
                   <input placeholder="gender" type="text"/>
               </figure>
           </div>

      </div>



          </div>
          </>
     )
   }
 }


export default AdminAboutUs;
