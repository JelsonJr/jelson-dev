import styled, { css, keyframes } from "styled-components";

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

export const MainContainer = styled.div`
    width: 90%;
    height: 70%;
    overflow: hidden;

    #tipText {
        background-color: #fff;
        color: #000;

        @media (max-width: 768px) {
            display: none;
        }
    }
`;

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    height: ${props => (props.$viewText ? "" : "800px")};
    perspective: ${props => (props.$viewText ? "0" : "400px")};

    @media (max-width: 1250px) {
        height: ${props => (props.$viewText ? "" : "600px")};
    }
`;

export const Fade = styled.div`
    position: relative;
    width: 90%;
    top: 20px;
    display: ${props => (props.$viewText ? "none" : "block")};
`;

export const Container = styled.div`
    position: relative;
    top: ${props => (props.$viewText ? "0px" : "150px")};
    transform-origin: 50% 100%;
    animation: ${props =>
        props.$viewText
            ? css``
            : css`
                  ${starwars} 26.3s cubic-bezier(.05,.21,.75,.82) infinite
              `};
    cursor: pointer;

    @media (max-width: 480px) {
        animation: ${props =>
            props.$viewText
                ? css``
                : css`
                      ${starwars} 27.5s cubic-bezier(.05,.21,.75,.82) infinite
                  `};
    }
`;

export const Text = styled.p`
    color: #feda4a;
    font-size: ${props => (props.$viewText ? "1.5em" : "2em")};
    letter-spacing: ${props => (props.$viewText ? "3px" : "5px")};
    line-height: 200%;
    text-align: ${props => (props.$viewText ? "justify" : "center")};
    hyphens: auto;

    @media (max-width: 768px) {
        font-size: ${props => (props.$viewText ? "1.3em" : "1.5em")};
        letter-spacing: 2px;
    }

    @media (max-width: 480px) {
        font-size: ${props => (props.$viewText ? "1em" : "1.3em")};
        letter-spacing: 1px;
        text-align: justify;
    }
`;
