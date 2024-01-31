import styled from "styled-components";

export const Container = styled.div`
    max-width: 75vw;
`;

export const CarouselDiv = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        path {
            fill: #fff;
        }
    }
`;