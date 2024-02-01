import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 300px;
    height: 100px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    transition:
        box-shadow 0.3s ease,
        height 0.5s ease,
        opacity 0.5s ease;

    img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h2 {
        position: absolute; 
        top: 0; 
        left: 0; 
        z-index: 1; 
        margin: 0;
        padding: 10px;
    }

    &:hover {
        box-shadow: none;
        height: 600px;

        button,
        div {
            opacity: 1;
        }

        h2 {
            color: #fff;
        }
    }
`;

export const StyledDiv = styled.div`
    position: absolute; 
    top: 85%;
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 20px;
    padding: 0 10px;
    background-color: #032552;
    opacity: 0;

    button {
        font-family: monospace;
        font-size: 1.5em;
        font-weight: 500;
        color: #fff;
        background-color: transparent;
        border: none;
        padding: 10px 15px;

        &:hover {
            cursor: pointer;
        }
    }

    svg {
        &:hover {
            cursor: pointer;
        }
    }

    cursor: pointer;
`;
