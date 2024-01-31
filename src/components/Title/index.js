import styled from "styled-components";

export const Title = styled.h1`
    font-size: 4.2em;
    text-align: center;
    color: black;
    text-shadow:
        -3px -3px 0 #ffd700,
        3px -3px 0 #ffd700,
        -3px 3px 0 #ffd700,
        3px 3px 0 #ffd700;

    cursor: ${props => props.$pointer ? "pointer" : "normal"};
    
    @media (max-width: 960px) {
        font-size: 2.5em;
    }

    @media (max-width: 768px) {
        font-size: 2em;
    }

    @media (max-width: 480px) {
        text-shadow:
            -2px -2px 0 #ffd700,
            2px -2px 0 #ffd700,
            -2px 2px 0 #ffd700,
            2px 2px 0 #ffd700;
        font-size: 1.7em;
    }

    @media (max-width: 375px) {
        text-shadow:
            -1.4px -1.4px 0 #ffd700,
            1.4px -1.4px 0 #ffd700,
            -1.4px 1.4px 0 #ffd700,
            1.4px 2px 0 #ffd700;
        font-size: 1.3em;
    }
`;
