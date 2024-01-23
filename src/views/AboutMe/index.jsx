import { useContext } from "react";
import { LanguagesContext } from "../../context/contextLanguage";
import { Title } from "../Home/styles";
import styled, { keyframes } from "styled-components";

const crawl = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100%);
    }
`;

const Container = styled.section`
    background: linear-gradient(to bottom, #000000, #032552);
    padding: 90px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerText = styled.div`
    width: 960px;
    max-width: 90%;
    max-height: 45vh;
    display: flex;
    flex-direction: column;
`;

const Text = styled.p`
    color: #fff;
    font-size: 2em;
    display: inline-block;
    animation: ${crawl} 70s linear infinite;
`;

const AboutMe = () => {
    const { texts, language } = useContext(LanguagesContext);

    const text = texts[language].about.description;
    const paragraphs = text.split("\n");

    return (
        <Container id="aboutMe">
            <Title>{texts[language].about.title}</Title>

            <ContainerText>
                {paragraphs.map((txt, index) => (
                    <Text key={index}>{txt}</Text>
                ))}
            </ContainerText>
        </Container>
    );
};

export default AboutMe;
