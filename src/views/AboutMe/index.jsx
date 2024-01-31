import { useContext } from "react";
import { LanguagesContext } from "../../context/contextLanguage";
import styled from "styled-components";
import ScrollText from "../../components/ScrollText";
import { Title } from "../../components/Title";

const Container = styled.section`
    background: linear-gradient(to bottom, #000000, #032552);
    padding: 90px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AboutMe = () => {
    const { texts, language } = useContext(LanguagesContext);

    const text = texts[language].about.description;
    const paragraphs = text.split("\n");

    return (
        <Container id="aboutMe">
            <Title>{texts[language].about.title}</Title>
            <ScrollText paragraphs={paragraphs} />
        </Container>
    );
};

export default AboutMe;
