import SunriseIcon from '../utilities/SunRiseIcon';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ContactPopUp from './ContactPopUp';

function Contact() {
  const [showContactPopUp, setShowContactPopUp] = useState(false)

  const openContactPopUp = () => {
    setShowContactPopUp(prev => !prev)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    openContactPopUp();
  }

  return (
    <div className='contactus_main'>
      <div className='contactus_icon_container'>
        <i style={{ color: '#9ceaef', paddingBottom: '10px' }}>
          <SunriseIcon width="60px" height="48px" />
        </i>
      </div>
      <span className='contact_head_title'>Contact Us</span>
      <div>
        <div className='contactus_content'>
          <div className='contactus_text'>
            <div className='contactustextbox'>
              <h2>Points of contact</h2>
              <h3>Hungary | Event Horizon</h3>
              <p>1000 Budapest</p>
              <p>Progmatic utca 7.</p>
              <p>Tel: +36-30-123-4567</p>
              <h4>Information</h4>
              <p className='email'>information@eventhorizon.com</p>
              <h4>Support</h4>
              <p className='email'>support@eventhorizon.com</p>
              <h3>Additional office location</h3>
              <h4 id="panama">Panama</h4>
              <p>Via Argentina Galerias Alvear 2</p>
            </div>

          </div>
          <div className='contactus_form_container'>
            <form className='contactusform' onSubmit={submitHandler}>
              <h4>Please note: all fields are required.</h4>
              <label htmlFor="cu_firstname" className='textlabel'>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                id="cu_firstname"
                className="textinput"
                required
              />
              <label htmlFor="cu_lastname" className='textlabel'>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                id="cu_lastname"
                className="textinput"
                required
              />
              <label htmlFor='phone' className='textlabel'>Phone Number</label>
              <input
                type="tel"
                className='textinput'
                placeholder="+12-34-567-8910"
                pattern="[+][0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}"
                required />
              <br></br>
              <label htmlFor="cu_country" className='textlabel'>E-mail</label>
              <input
                type="email"
                placeholder="email"
                name="email"
                id="cu_email"
                className="textinput"
                required
              />
              <label htmlFor="message" className="textlabel textarea">
                Your Message
              </label>
              <textarea
                required
                type="textarea"
                placeholder="Your message here"
                name="message"
                id="message"
                className="textinput"
              />
              <input
                type="checkbox"
                name="moreinfo"
                id="cu_moreinfo"
              />
              <label htmlFor="cu_moreinfo" id="privacycheckbox_label">
                I'd like to receive more information about <br></br>
                Event Horizon, I understand and agree to the
                <p>
                  <NavLink to="/privacy" className="privacylink">
                    privacy policy
                  </NavLink>
                </p>
              </label>
              <button className="signup_btn contactmessage_btn">SEND MESSAGE</button>
              <ContactPopUp showContactPopUp={showContactPopUp} setShowContactPopUp={showContactPopUp} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact