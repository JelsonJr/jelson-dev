import styled from "styled-components";

export const Container = styled.article`
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    width: 280px;
    border-radius: 16px;
    flex: none;
`;

export const Image = styled.div`
    img {
        width: 280px;
        height: 200px;
        object-fit: cover;
    }
`;

export const Info = styled.div`
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        display: block;
        text-align: center;
        color: #1e1e1e;
        padding: 5px;
        border-radius: 10px;
    }
`;

export const ProjectName = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
`;

export const ProjectDescription = styled.span`
    font-size: 0.8rem;
    flex-grow: 1;
    font-family: "Inter";
`;

export const Link = styled.a`
    font-family: "InterBold";
    font-weight: bold;
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
    font-size: 1rem;
    margin-top: 10px;
    text-decoration: none;
    background-color: #feda4a;
`;
