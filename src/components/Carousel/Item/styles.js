import styled from "styled-components";

export const Container = styled.article`
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    height: 550px;
    max-height: 80vh;
    flex: none;
`;

export const Image = styled.div`
    img {
        width: 100%;
        height: 350px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        object-fit: cover;
    }
`;

export const Info = styled.div`
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    span {
        display: block;
        text-align: center;
        color: #fff;
        padding: 5px;
        border-radius: 10px;
    }
`;

export const ProjectName = styled.span`
    font-size: 1.5em;
`;

export const ProjectDescription = styled.span`
    font-family: "Inter";
    font-size: 1em;
    margin-top: 10px;
`;

export const Link = styled.a`
    display: block;
    width: 50%;
    margin-top: 20px;
    padding: 5px;
    border-radius: 10px;
    font-family: "InterBold";
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    color: #1e1e1e;
    text-decoration: none;
    background-color: #feda4a;

    &:hover {
        cursor: pointer;
    }
`;
