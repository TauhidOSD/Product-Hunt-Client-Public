import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/bg1.png'
import img2 from '../../../assets/bg2.jpg'
import img3 from '../../../assets/bg3.jpg'

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
    );
};

export default Banner;