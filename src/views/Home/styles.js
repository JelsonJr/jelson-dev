import styled from "styled-components";
import BackgroundImage from "../../assets/images/backgrounds/background.jpg";

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

export const Force = styled.span`
    text-shadow: none;
    color: #ffd700;
`;

export const TextContainer = styled.div`
    width: 1200px;
    max-width: 90%;

    p {
        font-size: 1.5em;
        font-family: "Inter";
        color: #fff;
        text-align: justify;
        padding: 10px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.3);
    }
`