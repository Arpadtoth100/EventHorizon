import SunriseIcon from '../utilities/SunRiseIcon';
import { NavLink } from 'react-router-dom';

function Contact() {
    return (
        <div className="outlet_main">
            <div className="contactus_head">
      <div>
        <div className='privacy_icon_container'>
          <i style={{ color: '#9ceaef', paddingBottom: '10px' }}>
            <SunriseIcon width="60px" height="48px" />
          </i>
        </div>
        <div>
        </div>
        <p className='privacy_head_title'>Contact Us</p>
      </div>
    </div>
            <h1>Contact Us</h1>
            <p>Most contact pages are designed with function in mind.</p>

            <p>They slap an email address, phone, and location on a plain background and call it a day.</p>

            <p>But basic contact pages don’t inspire visitors to reach out and connect.</p>

            <p>Other pages make it easy to contact the company – which is awesome.</p>

            <p>Except, that can also drive up customer service costs. </p>
            <h3>So what makes the perfect Contact Us page?</h3>
            <p> An awesome Contact Us page finds just the right balance between making it easy to reach the company and sharing resources users can use to answer their questions right away.</p>
        </div>
    )
}

export default Contact