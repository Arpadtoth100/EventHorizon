import '../../Video.css';
import videoBg3 from '../../images/videoBg3.mp4';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function AboutUs() {
  return (
    <>
      <div>
      <div div className="aboutus-hero">
          <div className="aboutus-hero-img-wrapper">
            <img
              className="aboutus-hero-img"
              src="./pexels-pixabay-207896 new color kisebb.jpg"
              alt=""
            />
            <div className="aboutus-hero-text">
            <h1>There are always great events</h1>
          <h1>on the Horizon.</h1>
          <p>Our mission is to help you catch them.</p>
          <span className="about_icons">
            <div className='about_iconcontainer'>
              <FaFacebookF size={'1.5em'} />
            </div>
            <div className='about_iconcontainer'>
              <FaTwitter size={'1.5em'} />
            </div>
            <div className='about_iconcontainer'>
              <FaInstagram size={'1.5em'} />{' '}
            </div>
          </span>
        </div>
        </div>
          </div>
        <div className="team">
          <div>
            <p>Meet the team</p>
            <h1>Behind the Horizon</h1>
          </div>
          <div className="team_container">
            <div className="memberdetails">
              <div className="teammember">
                <img
                  className="teammember"
                  src="dandelion.jpg"
                  alt="teammember"
                />
              </div>
              <p>Árpád</p>
              <p>TÓTH</p>
            </div>
            <div className="memberdetails">
              <img
                className="teammember"
                src="dandelion.jpg"
                alt="teammember"
              />
              <p>Dávid</p>
              <p>VÉGH</p>
            </div>
            <div className="memberdetails">
              <img
                className="teammember"
                src="zealot_profile.png"
                alt="teammember"
              />
              <p>Marcus</p>
              <p>VIDRÁNYI</p>
            </div>
            <div className="memberdetails">
              <img className="teammember" src="MSE.jpg" alt="teammember" />
              <p>Emese</p>
              <p>JÓZSA</p>
            </div>
            <div className="memberdetails">
              <img
                className="teammember"
                src="dandelion.jpg"
                alt="teammember"
              />
              <p>Tamás</p>
              <p>BITTERA</p>
            </div>
            <div className="memberdetails">
              <img
                className="teammember"
                src="dandelion.jpg"
                alt="teammember"
              />
              <p>Dávid</p>
              <p>BALÁZS</p>
            </div>
            <div className="memberdetails">
              <img
                className="teammember"
                src="dandelion.jpg"
                alt="teammember"
              />
              <p>Dávid</p>
              <p>FARKAS</p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default AboutUs;
