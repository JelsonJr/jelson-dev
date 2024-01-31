import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(to bottom, #031449, #034dae);
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
`;
