import React, { useContext, useState } from "react";
import { LanguagesContext } from "../../context/contextLanguage";
import { Container, Force, Title } from "./styles";

const Home = () => {
    const { texts, language } = useContext(LanguagesContext);
    const [isAudioPlaying, setAudioPlaying] = useState(false);

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
        <Container id="home">
            <Title onClick={playAudio}>
                {texts[language].header.title} <Force>{texts[language].header.force}</Force> {texts[language].header.restOfTitle}
            </Title>
            <audio ref={audioRef} src={texts[language].audio} />
        </Container>
    );
};

export default Home;
