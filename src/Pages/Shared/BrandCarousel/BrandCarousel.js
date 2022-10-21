import React from 'react';
import { Carousel } from 'react-bootstrap';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 h-25 img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0jdMVpS4XsLT4avnK9kuf8OOmt5Wzbja6g&usqp=CAU"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegpczh84RjKR_9FdeUItDWGMna5o4g4Vu4RhTKx8qGFxeSU3sjJzPrz294Gr_M_jfeFA&usqp=CAU"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;