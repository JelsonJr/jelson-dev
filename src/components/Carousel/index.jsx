import PropTypes from "prop-types";
import Item from "./Item";
import { useRef } from "react";
import { Button, Buttons, CarouselDiv, Container } from "./styles";

const Carousel = ({ items }) => {
    const carousel = useRef(null);

    const handleLeftClick = e => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = e => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <Container>
            <CarouselDiv ref={carousel}>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        link={item.linkGithub}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        alt={item.alt}
                    />
                ))}
            </CarouselDiv>
            <Buttons>
                <Button onClick={handleLeftClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevrons-left"
                    >
                        <polyline points="11 17 6 12 11 7"></polyline>
                        <polyline points="18 17 13 12 18 7"></polyline>
                    </svg>
                </Button>
                <Button onClick={handleRightClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevrons-right"
                    >
                        <polyline points="13 17 18 12 13 7"></polyline>
                        <polyline points="6 17 11 12 6 7"></polyline>
                    </svg>
                </Button>
            </Buttons>
        </Container>
    );
};

Carousel.propTypes = { items: PropTypes.array.isRequired };

export default Carousel;
