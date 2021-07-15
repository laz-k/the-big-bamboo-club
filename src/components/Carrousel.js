import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide1 from './../resources/images/slide-1.png';
import slide2 from './../resources/images/slide-2.jpeg';
import slide3 from './../resources/images/slide-3.jpeg';
import slide4 from './../resources/images/slide-4.jpeg';

const Carrousel = () => {
	const settings = {
		dots: false,
    fade: true,
		infinite: true,
		autoplay: true,
		speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
	};
  
  
	return (
    <div className="carrousel-wrapper">
			<Slider {...settings}>
				<div>
					<div
						className="carrousel-image"
						style={{
							background: `url(${slide1})no-repeat center`,
						}}
					></div>
				</div>
				<div>
					<div
						className="carrousel-image"
						style={{
							background: `url(${slide2})no-repeat center`,
						}}
					></div>
				</div>
				<div>
					<div
						className="carrousel-image"
						style={{
							background: `url(${slide3}) no-repeat center`,
						}}
					></div>
          </div>
          <div>
					<div
						className="carrousel-image"
						style={{
							background: `url(${slide4})no-repeat center`,
						}}
					></div>
				</div>
			</Slider>
		</div>
	);
};

export default Carrousel;
