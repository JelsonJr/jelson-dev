import PropTypes from "prop-types";
import Item from "./Item";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

const Container = styled.div`
    width: 100%;
    max-width: 960px;
`;

const Carousel = ({ items }) => {
    const audioBreathingRef = useRef();

    const handleSlider = () => {
        const randomValue = Math.random().toFixed(1);
        const probabilityToPlayAudio = 0.4;

        if (randomValue <= probabilityToPlayAudio) {
            audioBreathingRef.current.play();
        }
    };

    return (
        <Container>
            <Swiper onSlideChange={handleSlider} slidesPerView={1} navigation pagination={{ clickable: true }}>
                {items.map(({ image, alt, description, linkGithub, name }, index) => (
                    <SwiperSlide key={index}>
                        <Item alt={alt} image={image} description={description} link={linkGithub} name={name} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <audio ref={audioBreathingRef} src="/assets/audio/darthVaderBreathing.mp3" />
        </Container>
    );
};

Carousel.propTypes = { items: PropTypes.array.isRequired };

export default Carousel;
