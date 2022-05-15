import ThankYouScreen from "../../views/ThankYouScreen";

function AboutUs() {
  return <div className="outlet_main">
    <div className="about-us_container">
      <div className="aboutus-hero" >
        <div className="aboutus-hero-img-wrapper">
          <img className="aboutus-hero-img" src="./pexels-pixabay-207896 new color1.jpg" alt='' />
        </div>
        <div className="aboutus-hero-text">
          <p>There are always great events on the horizon!</p>
          <p>Simply join!</p>
        </div>
      </div>
      <div className="blabla">
        <p>EventHorizon is the best lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ratione est ut nisi nihil repudiandae officia pariatur voluptatem! Culpa eligendi vitae magni amet fugit nihil officiis harum, aliquid voluptas laudantium?</p>
      </div>
    </div>
    <div>
      <br/>
      <ThankYouScreen />
    </div>
  </div>;
}

export default AboutUs;
