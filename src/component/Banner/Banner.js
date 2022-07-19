import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Banner.scss'
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';


const slideImages = [
    {
        url: `${banner1}`,
        heading: 'DESIGNED BY GAMERS, FOR GAMERS!',
        description: 'AN INCREDIBLY IMPORTANT PIECE OF THE PC PUZZLE. MOTHERBOARDS',
        smallHeading: 'Shop Now',
    },
    {
        url: `${banner2}`,
        heading: 'MOST REALISTIC & IMMERSIVE GRAPHICS',
        description: 'ULTRA RESPONSIVE, STYLISH GAMING GEAR',
        smallHeading: 'VIEW GRAPHIC CARDS',
    }
];

const Banner = () => {

    return (
        <div className="slide-container">
            <Slide className="slide">
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div className="banner-image" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                            <div className='banner-image-text'>
                                
                                <h1 class='ml10'>
                                    <span class="text-wrapper">{slideImage.heading}</span>
                                </h1>
                                <p>{slideImage.description}</p>
                                <h4>{slideImage.smallHeading}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default Banner