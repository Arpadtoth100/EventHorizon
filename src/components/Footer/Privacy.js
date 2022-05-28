import SunriseIcon from '../utilities/SunRiseIcon';
import { NavLink } from 'react-router-dom';

function Privacy() {
  return (
    <div>
      <div className="privacy_head">
        <div>
          <div className="privacy_icon_container">
            <i style={{ color: '#9ceaef', paddingBottom: '10px' }}>
              <SunriseIcon width="60px" height="48px" />
            </i>
          </div>
          <div></div>
          <p className="privacy_head_title">Event Horizon Privacy Policy</p>
        </div>
      </div>
      <div className="privacy_text">
        <h3>Privacy policy is important</h3>
        <p>
          The privacy policy is one of the most essential legal requirements for
          websites. Even if you just have a small business or a blog with no
          income at all, you might be surprised to discover that you still need
          a privacy policy. Basically, if your website collects personal data,
          you need a privacy policy that informs your users about this according
          to privacy laws in most jurisdictions, including the EU and US.
        </p>
        <br />
        <h3>Do we need a privacy policy for websites?</h3>
        <p>
          We probably do. If a website collects personal data, we need a privacy
          policy. Most websites collect user data. Often, it happens without the
          website owner even being aware of it, by means of cookies. If your
          website is hosted, or if you use plugins, social media-buttons,
          analytics tools and the like on your website, then it does set cookies
          and collect user data.
        </p>
        <br />
        <h3>GDPR privacy policy</h3>
        <p>
          With the enforcement of the GDPR and the EU ePrivacy regulation, a
          proper privacy policy is adamant for websites in the EU and websites
          that have EU-citizens amongst their users.
        </p>
        <br />
        <h3>
          How can I get a privacy policy on my website? A GDPR-compliant privacy
          policy
        </h3>
        <p>
          The privacy policy can be written as an independent page on your
          website, and be made accessible as a link in the header or footer of
          your website, or on your ‘About’ page. It may also be hosted by a
          privacy policy-service with a link from your homepage. Basically, it
          doesn’t matter where you choose to place it, as long as your users
          have access to it. The privacy policy is a legal text. The phrasing
          depends on which jurisdictions your website falls under and how your
          website handles data. All websites are different. We always recommend
          that you consult a lawyer to ensure that your privacy policy is
          compliant with all applicable laws. However, this might seem as a
          large expense if you are, for instance, a hobby blogger or small
          business. What you should never do, is to copy a privacy policy from
          some other website.
        </p>
        <br />
        <h3>We value your privacy</h3>
        <p>
          We and our partners store and/or access information on a device, such
          as cookies and process personal data, such as unique identifiers and
          standard information sent by a device for personalised ads and
          content, ad and content measurement, and audience insights, as well as
          to develop and improve products. With your permission we and our
          partners may use precise geolocation data and identification through
          device scanning. You may click to consent to our and our partners’
          processing as described above. Alternatively you may access more
          detailed information and change your preferences before consenting or
          to refuse consenting. Please note that some processing of your
          personal data may not require your consent, but you have a right to
          object to such processing. Your preferences will apply to this website
          only. You can change your preferences at any time by returning to this
          site or visit our privacy policy.
        </p>
        <br />
        <h3>Do you have any questions?</h3>
        <p>Feel free to reach out and</p>
        <NavLink to="/contact" className="contactlink">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

export default Privacy;
