import styled from "styled-components";
import BackgroundImage from "/assets/images/backgrounds/background.jpg";

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
    
    h1 {
        position: absolute;
        left: 2%;
        top: 25%;
    }

    @media(max-width: 1268px) {
        h1 {
            position: inherit;
        }
    }
`;

export const Force = styled.span`
    text-shadow: none;
    color: #ffd700;
`;

export const TextContainer = styled.div`
    width: 950px;
    max-width: 90%;
    position: absolute;
    left: 2%;
    top: 40%;
    
    p {
        font-size: 1.3em;
        font-family: "Inter";
        color: #fff;
        text-align: justify;
        letter-spacing: 0.8px;
        hyphens: auto;
    }

    @media(max-width: 2000px) {
        width: 750px;
    }

    @media(max-width: 1268px) {
        position: inherit;
        width: 950px;
        background-color: rgba(0, 0, 0, 0.15);
        padding: 5px;
        border-radius: 10px;
    }

    @media(max-width: 960px) {
        p {
            font-size: 1.2em;
        }
    }

    @media(max-width: 768px) {
        p {
            font-size: 1.1em;
        }
    }

    @media(max-width: 480px) {
        p {
            font-size: 1em;
        }
    }
`;
