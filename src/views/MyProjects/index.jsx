import styled from "styled-components";
import Carousel from "components/Carousel";
import Projects from "mocks/projects.json";
import { Title } from "components/Title";

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(to bottom, #032552 21%, #031449);

    p {
        color: #feda4a;
        text-align: center;
    }
`;

const MyProjects = () => {
    return (
        <Container id="projects">
            <Title>Meus projetos</Title>
            <p>uma lista com todos os projetos que desenvolvi após criar este site:</p>
            <Carousel items={Projects} />
        </Container>
    );
};

export default MyProjects;
