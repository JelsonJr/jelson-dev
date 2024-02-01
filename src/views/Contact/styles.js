import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(to bottom, #031449, #034dae);
`;

export const CardsContainer = styled.div`
    position: absolute;
    top: 20%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
    max-width: 1400px;
    margin: 0 auto;
`;
