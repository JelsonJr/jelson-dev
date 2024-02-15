import { useContext, useRef, useState } from "react";
import { LanguagesContext } from "context/contextLanguage";
import { Container, Force, TextContainer } from "./styles";
import { Title } from "components/Title";

const Home = () => {
    const { texts, language } = useContext(LanguagesContext);
    const [isAudioPlaying, setAudioPlaying] = useState(false);

    const audioRef = useRef();

    const playAudio = () => {
        const playOrPause = isAudioPlaying ? "pause" : "play";
        audioRef.current[playOrPause]();

        setAudioPlaying(!isAudioPlaying);
    };

    return (
        <Container id="home">
            <Title $pointer={true} onClick={playAudio}>
                {texts[language].header.title} <Force>{texts[language].header.force}</Force> {texts[language].header.restOfTitle}
            </Title>
            <TextContainer>
                <p>{texts[language].header.apresentation}</p>
                <p>{texts[language].header.services}</p>
            </TextContainer>
            <audio ref={audioRef} src={texts[language].audio} />
        </Container>
    );
};

export default Home;
