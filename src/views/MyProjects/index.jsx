import styled from "styled-components";
import Carousel from "../../components/Carousel";
import Projects from "../../mocks/projects.json";
import { Title } from "../Home/styles";

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(to bottom, #032552 21%, #031449);
`;

const MyProjects = () => {
    return (
        <Container id="projects">
            <Title>Meus projetos</Title>
            <Carousel items={Projects} />
        </Container>
    );
};

export default MyProjects;
