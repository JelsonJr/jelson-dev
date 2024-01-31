import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "./errorImage.jpeg";

export const Container = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30%;
    background-color: #000;

    @media (max-width: 768px) {
        background-size: 50%;
    }

    @media (max-width: 480px) {
        background-size: 70%;
    }
`;

export const ContainerMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
`;

export const Title = styled.h1`
    text-align: center;
    color: #f9f9f9;
    font-size: 3em;

    span {
        &:first-child {
            color: gray;
        }

        &:last-child {
            color: #830100;
            text-shadow: 0 0 10px rgba(181, 0, 0, 0.8);
        }
    }

    @media (max-width: 1440px) {
        font-size: 2.5em;
    }

    @media (max-width: 1200px) {
        font-size: 2.2em;
    }

    @media (max-width: 1087px) {
        font-size: 2em;
    }

    @media (max-width: 920px) {
        font-size: 1.5em;
    }

    @media (max-width: 768px) {
        font-size: 1.3em;
    }

    @media (max-width: 600px) {
        font-size: 1.1em;
    }

    @media (max-width: 500px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.8em;
    }
`;

export const Text = styled.p`
    color: #f9f9f9;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.8em;
    }
`;

export const StyledLink = styled(Link)`
    color: #feda4a;
    margin: 0 5px;
    text-decoration: none;
`;
