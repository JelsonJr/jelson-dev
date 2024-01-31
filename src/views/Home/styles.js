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

export const Force = styled.span`
    text-shadow: none;
    color: #ffd700;
`;
