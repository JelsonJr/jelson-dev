import styled from "styled-components";
import BackgroundImage from "/assets/images/backgrounds/stormtroopers.jpg";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    background-image: url(${BackgroundImage});
    background-repeat: repeat;
    background-size: contain;
    position: relative;

    button {
        position: absolute;
        right: 1%;
        top: 2%;
        color: #fff;
        padding: 10px;
        background-color: #034dae;
        border: none;
        border-radius: 10px;
        transition: transform 0.3s;

        &:hover {
            cursor: pointer;
            transform: scale(1.2);
        }
    }
`;

export const TextsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    max-width: 90%;

    .texts {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
        border-radius: 10px;
    }
`;

export const Title = styled.h2`
    color: #feda4a;
    text-align: center;
    text-shadow:
        -3px -3px 0 #000,
        3px -3px 0 #000,
        -3px 3px 0 #000,
        3px 3px 0 #000;

    @media (max-width: 480px) {
        text-shadow:
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000;
    }

    @media (max-width: 375px) {
        text-shadow:
            -1.4px -1.4px 0 #000,
            1.4px -1.4px 0 #000,
            -1.4px 1.4px 0 #000,
            1.4px 2px 0 #000;
    }
`;

export const Text = styled.p`
    font-family: "Inter";
    text-align: center;
    color: #feda4a;
`;
