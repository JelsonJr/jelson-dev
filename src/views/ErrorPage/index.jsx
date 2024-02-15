import { useContext } from "react";
import { LanguagesContext } from "context/contextLanguage";
import { Container, ContainerMessage, StyledLink, Text, Title } from "./styles";

const ErrorPage = () => {
    const { texts, language } = useContext(LanguagesContext);

    return (
        <Container>
            <ContainerMessage>
                <Title>
                    <span>{texts[language].errorPage.error}</span>
                    <span>{texts[language].errorPage.description}</span>
                </Title>
                <Text>
                    {texts[language].errorPage.click}
                    <StyledLink to="/">{texts[language].errorPage.here}</StyledLink>
                    {texts[language].errorPage.return}
                </Text>
            </ContainerMessage>
        </Container>
    );
};

export default ErrorPage;
