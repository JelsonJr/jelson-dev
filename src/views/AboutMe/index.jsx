import { useContext } from "react";
import { LanguagesContext } from "../../context/contextLanguage";
import { Title } from "../Home/styles";
import styled from "styled-components";

const Container = styled.section`
    background: linear-gradient(to bottom, #000000, #032552);
    padding: 40px 20px;
`;

const AboutMe = () => {
    const { texts, language } = useContext(LanguagesContext);

    const text = texts[language].about.description;

    return (
        <Container>
            <Title id="aboutMe">{texts[language].about.title}</Title>
            <div>
                <p>{text}</p>
            </div>
        </Container>
    );
};

export default AboutMe;
