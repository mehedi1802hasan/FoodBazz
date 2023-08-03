import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
             <Carousel  className='text-center'>
                <div>
                    <img src="https://i.ibb.co/zFrdNTR/01.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/RPK7TCz/02.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/ww5fF3j/03.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/yW2mQ4x/04.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/tck7yZJ/05.png" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/NZHtzxm/06.png" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;