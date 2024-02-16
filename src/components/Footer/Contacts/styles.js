import styled from "styled-components";

export const Contacts = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    width: 600px;
    max-width: 90%;
    margin-bottom: 25px;
`;

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    max-width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0,0, 0.5);
    transition: 0.4s background-color;
    
    img {
        object-fit: cover;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        user-select: none;
    }

    &:hover {
        background-color: rgba(0, 0,0, 1);
    }

    h3 {
        font-size: 1.5em;
        color: #feda4a;
        text-align: center;
        text-shadow:
            -3px -3px 0 #000,
            3px -3px 0 #000,
            -3px 3px 0 #000,
            3px 3px 0 #000;

        @media (max-width: 480px) {
            text-shadow:
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000;
        }

        @media (max-width: 375px) {
            text-shadow:
                -1.4px -1.4px 0 #000,
                1.4px -1.4px 0 #000,
                -1.4px 1.4px 0 #000,
                1.4px 2px 0 #000;
        }
    }
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F0F0F0;
    padding: 10px;
    border-radius: 8px;
    gap: 35px;

    a {
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        svg {
            path {
                fill: #000;
            }
        }
    }
`;