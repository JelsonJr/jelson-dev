import styled from "styled-components";
import BackgroundImage from "../../assets/images/background.jpg";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    color: black;
    text-shadow:
        -3px -3px 0 #ffd700,
        3px -3px 0 #ffd700,
        -3px 3px 0 #ffd700,
        3px 3px 0 #ffd700;

    @media (max-width: 960px) {
        font-size: 2.5em;
    }

    @media (max-width: 768px) {
        font-size: 2em;
    }

    @media (max-width: 480px) {
        text-shadow:
            -2px -2px 0 #ffd700,
            2px -2px 0 #ffd700,
            -2px 2px 0 #ffd700,
            2px 2px 0 #ffd700;
        font-size: 1.3em;
    }

    @media (max-width: 375px) {
        text-shadow:
            -1.4px -1.4px 0 #ffd700,
            1.4px -1.4px 0 #ffd700,
            -1.4px 1.4px 0 #ffd700,
            1.4px 2px 0 #ffd700;
        font-size: 1em;
    }
`;

export const Force = styled.span`
    text-shadow: none;
    color: #ffd700;
`;
