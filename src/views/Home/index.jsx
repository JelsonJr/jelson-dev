import styled from "styled-components";
import Header from "../../components/Header";
import BackgroundImage from "../../assets/images/background.jpg";
import React, { useContext, useState } from "react";
import { LanguagesContext } from "../../context/contextLanguage";

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    opacity: ${props => (props.$isMenuOpen ? 0.8 : 1)};
`;

const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    color: black;
    text-shadow:
        -3px -3px 0 #ffd700,
        3px -3px 0 #ffd700,
        -3px 3px 0 #ffd700,
        3px 3px 0 #ffd700;

    @media (max-width: 960px) {
        font-size: 2.5em;
    }

    @media (max-width: 768px) {
        font-size: 2em;
    }
`;

const Force = styled.span`
    text-shadow: none;
    color: #ffd700;
`;

const Home = () => {
    const { texts, language } = useContext(LanguagesContext);
    const [isAudioPlaying, setAudioPlaying] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const audioRef = React.createRef();

    const playAudio = () => {
        if (isAudioPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setAudioPlaying(!isAudioPlaying);
    };

    return (
        <>
            <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            <Container $isMenuOpen={isMenuOpen}>
                <Title onClick={playAudio}>
                    {texts[language].header.title} <Force>{texts[language].header.force}</Force>{" "}
                    {texts[language].header.restOfTitle}
                </Title>
                <audio ref={audioRef} src={texts[language].audio} />
            </Container>
        </>
    );
};

export default Home;
