import SunriseIcon from '../utilities/SunRiseIcon';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const [feedback, setFeedback] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setFeedback(true);
  };

  return (
    <div className="outlet_main contactus_main">
      <div className="contactus_icon_container">
        <i style={{ color: '#9ceaef', paddingBottom: '10px' }}>
          <SunriseIcon width="60px" height="48px" />
        </i>
      </div>
      <div>
        <div className="contact_head_title">
          <span className="contact_head_title2">Contact Us</span>
        </div>
        <div>
          <div className="contactus_content">
            <div className="contactus_text">
              <div className="contactustextbox">
                <h2 className="cu_h2">Points of contact</h2>
                <h3>Hungary | Event Horizon</h3>
                <p>1000 Budapest</p>
                <p>Progmatic utca 7.</p>
                <p>Tel: +36-30-123-4567</p>
                <h4>Information</h4>
                <p className="email">information@eventhorizon.com</p>
                <h4>Support</h4>
                <p className="email">support@eventhorizon.com</p>
                <h3>Additional office location</h3>
                <h4 id="panama">Panama</h4>
                <p>Via Argentina Galerias Alvear 2</p>
              </div>
            </div>
            <div className="cu_form-container">
              <form id="cu_form" onSubmit={submitHandler}>
                <div className="formRow">
                  <div className="inline-block right-margin">
                    <label htmlFor="FirstName" className="cu_textlabel">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      name="FirstName"
                      id="FirstName"
                      required
                    />
                  </div>
                  <div className="inline-block responsive right-margin">
                    <label htmlFor="LastName" className="cu_textlabel">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      name="LastName"
                      id="LastName"
                      required
                    />
                  </div>
                </div>
                <div className="formRow">
                  <div className="inline-block right-margin">
                    <label htmlFor="email" className="cu_textlabel">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="inline-block responsive right-margin">
                    <label htmlFor="Phone" className="cu_textlabel">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      name="Phone"
                      id="Phone"
                      required
                    />
                  </div>
                </div>
                <label
                  htmlFor="contact-message"
                  className="cu_textlabel right-margin"
                >
                  Message
                </label>
                <div className="responsive">
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    className="input-field-message right-margin"
                    cols="60"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div className="formRow">
                  <div className="inline-block">
                    <input type="checkbox" name="moreinfo" id="cu_moreinfo" />
                    <label htmlFor="cu_moreinfo" id="privacycheckbox_label">
                      I'd like to receive more information about Event Horizon,
                      I understand and agree to the <br></br>
                      <NavLink to="/privacy" className="privacylink">
                        privacy policy
                      </NavLink>
                    </label>
                  </div>
                </div>
                <div className="row contact-message">
                  <div>
                    <button type="submit" className="contactmessage_btn">
                      Send Message
                    </button>
                  </div>
                </div>
                <div></div>
                <div id="feedback">
                  {feedback && <p>Thank you for your message!</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
