import PropTypes from "prop-types";
import Item from "./Item";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = ({ items }) => {
    return (
        <Container>
            <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
                {items.map(({ image, alt, description, link, name }, index) => (
                    <SwiperSlide key={index}>
                        <Item alt={alt} image={image} description={description} link={link} name={name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

Carousel.propTypes = { items: PropTypes.array.isRequired };

export default Carousel;
