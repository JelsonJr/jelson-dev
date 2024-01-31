import { useContext, useRef, useState } from "react";
import { LanguagesContext } from "../../context/contextLanguage";
import { Container, Force } from "./styles";
import { Title } from "../../components/Title";

const Home = () => {
    const { texts, language } = useContext(LanguagesContext);
    const [isAudioPlaying, setAudioPlaying] = useState(false);

    const audioRef = useRef();

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
            <Title $pointer={true} onClick={playAudio}>
                {texts[language].header.title} <Force>{texts[language].header.force}</Force> {texts[language].header.restOfTitle}
            </Title>
            <audio ref={audioRef} src={texts[language].audio} />
        </Container>
    );
};

export default Home;
