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
    overflow: hidden;
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

    #iconContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30%;
        opacity: 0;
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

        #iconContainer {
            opacity: 0.75;
        }

        h2 {
            color: #fff;
        }

        @media (max-width: 1144px) {
            height: 575px;
        }

        @media (max-width: 768px) {
            height: 550px;
        }
    }

    @media (max-width: 1366px) {
        width: 270px;
    }

    @media (max-width: 1233px) {
        width: 250px;
    }

    @media (max-width: 1144px) {
        width: 350px;
    }

    @media (max-width: 768px) {
        width: 300px;
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
    opacity: 0;

    a {
        text-decoration: none;
        color: #fff;
        font-family: monospace;
        font-size: 1.5em;
        font-weight: 500;
        background-color: #032552;
        border: none;
        border-radius: 20px;
        padding: 10px 12px;

        &:hover {
            cursor: pointer;
        }
    }

    button {
        font-family: "Inter";
        font-size: 1.5em;
        font-weight: 500;
        border-radius: 10px;
        background-color: #032552;
        border: none;
        padding: 10px 12px;

        &:hover {
            cursor: pointer;
        }
    }

    @media (max-width: 1366px) {
        button {
            font-size: 1.2em;
        }
    }

    @media (max-width: 1012px) {
        button {
            padding: 6px 8px;
            font-size: 1.3em;
        }
    }

    @media (max-width: 400px) {
        button {
            padding: 6px 8px;
            font-size: 1em;
        }
    }

    cursor: pointer;
`;
