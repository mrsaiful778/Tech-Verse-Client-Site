import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    
    return (
        // <div>
        //    <img className="w-full h-auto md:h-[275px]" src="https://i.ibb.co/fXJpFs0/18774635-6045120gg.jpg" alt="" />
        // </div>
        <Carousel className='text-center' >
            <div>
                <img  src="https://i.ibb.co/4PLtzKb/i-Phone-16-Mock-Header-1.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/SBS7ZJy/Mac-Book-Pro-2023.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/fq91D4n/Apple-Watch-S9.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/tZPSPCw/S23-Ultra-ISOCELL-HP2-main1.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/GRPJFv9/65049a22106f87-06179321.webp" />
            </div>
            <div>
                <img src="https://i.ibb.co/9VhQwWN/i-Pad-Air-6.jpg" />
            </div>
        </Carousel>
    );
};

export default Banner;