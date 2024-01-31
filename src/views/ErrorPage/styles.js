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
    background-size: 40%;
    background-color: #000;
`;

export const ContainerMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;

export const Title = styled.h1`
    text-align: center;
    color: #fff;
`;

export const Text = styled.p`
    color: #fff;
`;

export const StyledLink = styled(Link)`
    color: #feda4a;
    margin: 0 5px;
    text-decoration: none;
`;