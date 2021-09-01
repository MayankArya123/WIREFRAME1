import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from 'react'
import $ from 'jquery'
import Image1 from  './Images/wireframe1i1.webp'
import Image2 from  './Images/wireframe1i2.webp'
import Image3 from  './Images/wireframe1i3.webp'
import Image4 from  './Images/wireframe1i4.webp'

function App() {


  function scrollFunction() {
    if (document.body.scrollTop >  140 || document.documentElement.scrollTop > 140) {
         console.log('im above 50 px')
             $('.first-slide').addClass('animate')
          // setActive(true)
      // document.getElementById("header").style.fontSize = "30px";
    } 
    if (document.body.scrollTop >  540 || document.documentElement.scrollTop > 540) {
         console.log('im above 50 px')
             $('.second-slide').addClass('animate')
          // setActive(true)
      // document.getElementById("header").style.fontSize = "30px";
    } 
    if (document.body.scrollTop >  1100 || document.documentElement.scrollTop > 1100) {
         console.log('im above 50 px')
             $('.third-slide').addClass('animate')
          // setActive(true)
      // document.getElementById("header").style.fontSize = "30px";
    } 
    if (document.body.scrollTop >  1240 || document.documentElement.scrollTop > 1240) {
         console.log('im above 50 px')
             $('.fourth-slide').addClass('animate')
          // setActive(true)
      // document.getElementById("header").style.fontSize = "30px";
    } 
    else {
         console.log('im inside 50 px')
          // setActive(false)
      // document.getElementById("header").style.fontSize = "90px";
    }
  }

  window.onscroll = function() { scrollFunction() };


useEffect(()=>{


  $('.first-slide')
  // if (window.matchMedia("(max-height: 700px)").matches) {

  //   /* The viewport is less than, or equal to, 700 pixels wide */
 
  //   console.log('in 1240')
   

  // } else {
  //   /* The viewport is greater than 700 pixels wide */
  //   console.log('out 700')
  //   $('.first-slide').addClass('animate')
  
  // }

})

  return (
    <div className="App">
       <div className="navigation-wrapper">
          <div className="navigation-block">
               <div className="first-navigation-section">
                <a href=""> Playdate|app kidzoo</a>
               </div>
               <div className="second-navigation-section">
                  <a href="">blog</a>
                  <a href="">contact</a>
                  <a href="">forum</a>
                  <a href="">members</a>
                  <a href="">about</a>
                  <a href="">appUpdates</a>
               </div>
               <div className="third-navigation-section">
                  <a href="">logo</a>
                  <a href="">logo</a>
                  <a href="">sign up</a>
               </div>
          </div>
       </div>

<section className="first-section-wrapper">

      <div className="image-block">

           <div className="image-block-1">

           </div>

           <div className="image-block-2">
           <div className="heading">
           <h2 className="title">Play dates made easy</h2>
           <p>KidZoo is a social platform that takes the effort and awkwardness out of playdates</p>
           </div>
          
           </div>

      </div>
    

</section>

<section className="second-section-wrapper">

      <div className="company-about-block">
      

      <div className="company-about-logo">
    
      </div>

      <div className="company-about-info">
        <h2 className="about-us">About us</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium tenetur numquam cum nam maxime explicabo pariatur ullam praesentium laborum hic neque, mollitia nulla voluptates, quidem deserunt commodi quod harum.
        Odio, neque optio eos earum perferendis quo animi eaque sint libero consectetur qui eligendi ipsa ducimus, fuga facilis architecto repellat, ex repellendus? Nostrum officiis reprehenderit excepturi at. Esse, voluptatem. Quibusdam?</p>
    

        <button className="read-more">read more</button>
        </div>


      </div>
  
    
</section>

<section className="third-section-wrapper">

       <div className="third-section-block">
       <div className="row">
       <div className="heading-block col-6">
       <h2 className="feature-list">FeatureList</h2>
       <h6>Simplify Your life with just three clicks</h6>
     </div>
       </div>
        

             <div className="gallery-block">

                    <div className="first-slide slide">
                       <div className="image-block">
                         <img src={Image1}/>
                       </div>
                        <div className="image-info-block"><h4>Quick and easy registration</h4> <h4> Connect with Facebook login, and answer a few questions about your kid's age and interests.

                        </h4></div>
                    </div>
                    <div className="second-slide slide">
                       <div className="image-block">
                         <img src={Image2}/></div>
                        <div className="image-info-block"><h4>
                        Connect with People You Already Know
                        </h4> <h4> Invite people you already know and trust - like the parents of kids from your child's class. </h4></div>
                    </div>
                    <div className="third-slide slide">
                       <div className="image-block">
                       <img src={Image3}/>
                       </div>
                        <div className="image-info-block"><h4>Schedule Easily</h4> <h4> Post a few times that work for a play date. KidZoo will show you profiles of other kids who are free around the same time. </h4></div>
                    </div>
                    <div className="fourth-slide slide">
                       <div className="image-block">
                       <img src={Image4}/>
                       </div>
                        <div className="image-info-block"><h4>Set Recurring Playdates</h4> <h4>You can set weekly recurring playdates, like Wednesday afternoon 4-5 pm with Zoey </h4></div>
                    </div>

             </div>

       </div>

</section>



    </div>
  );
}

export default App;
