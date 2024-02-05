import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 850px;
    background: linear-gradient(to bottom, #031449, #034dae);

    @media (max-width: 1144px) {
        height: 900px;
    }

    @media (max-width: 677px) {
        height: 1050px;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 1400px;
    max-width: 90%;
    margin: 0 auto;
`;
