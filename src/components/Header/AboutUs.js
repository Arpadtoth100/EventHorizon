import ThankYou from '../utilities/ThankYou';
import Slider from '../../services/Slider';

function AboutUs() {
  const imgSet = [
    './celebration-Image by Pete Linforth from Pixabay magenta crop1 resized.jpg',
    './moon Image by Gerd Altmann from Pixabay new color1 crop1 resized.jpg',
    './sunset-Image by Gerd Altmann from Pixabay new color1 crop1.jpg',
    './moon2 Image by Gerd Altmann from Pixabay new color1 crop1 resized.jpg',
  ];

  return (
    <div className="outlet_main">
      <Slider imgSet={imgSet} />
      <div>
        <div className="thankyouContainer2">
          <ThankYou />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
