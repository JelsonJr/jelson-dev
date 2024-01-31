import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 300px;
    height: 100px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition:
        box-shadow 0.3s ease,
        background-color 0.5s ease,
        height 0.5s ease,
        opacity 0.5s ease;

    h2 {
        margin-top: 50px;
    }

    &:hover {
        box-shadow: none;
        height: 500px;
        background-color: #fe4a4a;
        button,
        div {
            opacity: 1;
        }
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 20px;
    padding: 0 10px;
    background-color: #032552;
    opacity: 0;

    &:hover {
        cursor: pointer;
    }

    p {
        font-family: monospace;
        font-size: 1.5em;
        font-weight: 500;
        color: #fff;
    }
`;

export const StyledButton = styled.button`
    border: 2px solid #032552;
    border-radius: 20px;
    background-color: transparent;
    color: #032552;
    padding: 6px 8px;
    font-size: 14px;
    opacity: 0;
    cursor: pointer;
`;
