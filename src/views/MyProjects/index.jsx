import styled from "styled-components";
import Carousel from "components/Carousel";
import Projects from "mocks/projects.json";
import { Title } from "components/Title";
import { useContext } from "react";
import { LanguagesContext } from "context/contextLanguage";

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
    const { texts, language } = useContext(LanguagesContext);

    return (
        <Container id="projects">
            <Title>{texts[language].projects.title}</Title>
            <p>{texts[language].projects.text}:</p>
            <Carousel items={Projects} />
        </Container>
    );
};

export default MyProjects;
