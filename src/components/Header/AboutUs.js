import '../../Video.css';
import videoBg from '../../images/videoBg.mp4'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function AboutUs() {

  return (
    <>
    <div>
    <div className="overlay"></div>
    <div className="outlet_main  videomain">
      <video className='video' src={videoBg} autoPlay loop muted />
      <div className="title">
        <h1>There are always great events</h1>
        <h1>on the Horizon.</h1>
        <p>Our mission is to help you catch them.</p>
        <div className='team'>
          <h2>The team behind the Horizon</h2>
        </div>
        <div className='team_container transbox'>
          <div className='memberdetails'>
            <div className='teammember'>
              <img className='teammember' src="dandelion.jpg" alt="teammember" />
            </div>
            <p>Tóth</p>
            <p>Árpád</p>
          </div>
          <div className='memberdetails'>
          <img className='teammember' src="dandelion.jpg" alt="teammember" />
            <p>Dávid</p>
            <p>VÉGH</p>
          </div>
          <div className='memberdetails'>
          <img className='teammember' src="zealot_profile.png" alt="teammember" />
            <p>Marcus</p>
            <p>Vidrányi</p>
          </div>
          <div className='memberdetails'>
          <img className='teammember' src="MSE.jpg" alt="teammember" />
            <p>Emese</p>
            <p>Józsa</p>
          </div>
          <div className='memberdetails'>
          <img className='teammember' src="dandelion.jpg" alt="teammember" />
            <p>Tamás</p>
            <p>Bittera</p>
          </div>
          <div className='memberdetails'>
          <img className='teammember' src="dandelion.jpg" alt="teammember" />
            <p>Dávid</p>
            <p>Balázs</p>
          </div>
          <div className='memberdetails'>
          <img className='teammember' src="dandelion.jpg" alt="teammember" />
            <p>Dávid</p>
            <p>Farkas</p>
          </div>
        </div>
        <div className='followus'>
          </div>
          <span  className='followus'>
            <div className="icon"><FaFacebookF size={'2em'}/></div>
            <div className="icon"><FaTwitter size={'2em'} /></div>
            <div className="icon"><FaInstagram size={'2em'}/> </div>
              </span>
          
      </div>
    </div>

    </div>
    </>
    
  );
}

export default AboutUs;
