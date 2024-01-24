import styled, { css, keyframes } from "styled-components";
import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { LanguagesContext } from "../../context/contextLanguage";

const starwars = keyframes`
    0% {
        top: -100px;
        transform: rotateX(20deg) translateZ(0);
    }
    100% {
        top: -800px;
        transform: rotateX(25deg) translateZ(-250px);
    }
`;

const MainContainer = styled.div`
    width: 90%;
    height: 70%;
    overflow: hidden;
`;

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    height: ${props => (props.$viewText ? "" : "800px")};
    perspective: ${props => (props.$viewText ? "0" : "400px")};
`;

const Fade = styled.div`
    position: relative;
    width: 90%;
    top: 20px;
    display: ${props => (props.$viewText ? "none" : "block")};
`;

const Container = styled.div`
    position: relative;
    top: ${props => (props.$viewText ? "0px" : "150px")};
    transform-origin: 50% 100%;
    animation: ${props =>
        props.$viewText
            ? css``
            : css`
                  ${starwars} 75s linear infinite
              `};
    cursor: pointer;
`;

const Text = styled.p`
    color: #feda4a;
    font-size: ${props => (props.$viewText ? "1.5em" : "2em")};
    letter-spacing: ${props => (props.$viewText ? "" : "5px")};
    line-height: ${props => (props.$viewText ? "" : "170%")};
    text-align: center;
`;

const ScrollText = ({ paragraphs }) => {
    const { texts, language } = useContext(LanguagesContext);
    const [viewText, setViewText] = useState(false);

    const handleUpdateText = () => {
        console.log(texts[language].tips.scrollText[viewText]);
        setViewText(!viewText);
    };

    return (
        <MainContainer>
            <Fade $viewText={viewText} />
            <StyledSection $viewText={viewText}>
                <Container $viewText={viewText} onClick={handleUpdateText}>
                    {paragraphs.map((text, index) => (
                        <Text
                            $viewText={viewText}
                            key={index}
                            data-tooltip-id="tipText"
                            data-tooltip-content={texts[language].tips.scrollText[viewText]}
                        >
                            {text}
                        </Text>
                    ))}
                </Container>
                <Tooltip id="tipText" />
            </StyledSection>
        </MainContainer>
    );
};

ScrollText.propTypes = {
    paragraphs: PropTypes.array.isRequired,
};

export default ScrollText;
