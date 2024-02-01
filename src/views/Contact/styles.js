import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 90vh;
    background: linear-gradient(to bottom, #031449, #034dae);

    @media (max-width: 1144px) {
        height: 100vh;
    }

    @media (max-width: 480px) {
        height: 112vh;
    }
`;

export const CardsContainer = styled.div`
    position: absolute;
    top: 20%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 1400px;
    max-width: 90%;
    margin: 0 auto;

    @media (max-width: 1012px) {
        top: 15%;
    }

    @media (max-width: 768px) {
        top: 8%;
    }

`;
