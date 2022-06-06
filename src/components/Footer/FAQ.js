import SunriseIcon from '../utilities/SunRiseIcon';
import { NavLink } from 'react-router-dom';

function FAQ() {
  return (
    // <div className="outlet_main">
    <div>
      <div className="faq_head">
        <div>
          <div className="privacy_icon_container">
            <i style={{ color: '#9ceaef', paddingBottom: '10px' }}>
              <SunriseIcon width="60px" height="48px" />
            </i>
          </div>
          <div></div>
          <p className="privacy_head_title">Frequently Asked Questions</p>
        </div>
      </div>
      <br />
      <div className="faq_text">
        <h3>How much does it cost to use Event Horizon?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <br />
        <h3>Can I use Event Horizon for free events?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <br />
        <h3>How do I pay on Event Horizon?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <br />
        <h3>How many events can I create for free at Event Horizon?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <br />
        <h3>Do you have another question?</h3>
        <p>Feel free to reach out and</p>
        <NavLink to="/contact" className="contactlink">
          Contact Us
        </NavLink>
      </div>

      {/* </div> */}
    </div>
  );
}

export default FAQ;
