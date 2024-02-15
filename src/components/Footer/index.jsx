import { useContext } from "react";
import { Container, Title } from "./styles";
import { LanguagesContext } from "context/contextLanguage";

const Footer = () => {
    const { texts, language } = useContext(LanguagesContext);

    return (
        <Container>
            <Title>{texts[language].footer.title}</Title>
            <img src="./assets/images/Mandalorian.png" />
        </Container>
    );
};

export default Footer;
