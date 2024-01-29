import styled from "styled-components";
import BackgroundImage from "./errorImage.jpeg";
import { useContext } from "react";
import { LanguagesContext } from "../../context/contextLanguage";

const Container = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #000;
`;

const ContainerMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;

const Title = styled.h1`
    text-align: center;
    color: #fff;
`;

const Text = styled.p`
    color: #fff;
`;

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    margin: 5px;
    border: none;
    cursor: pointer;
`;

const ErrorPage = () => {
    const { texts, language } = useContext(LanguagesContext);

    return (
        <Container>
            <ContainerMessage>
                <Title>{texts[language].errorPage.title}</Title>
                <Text>
                    {texts[language].errorPage.click}
                    <Button>{texts[language].errorPage.here}</Button>
                    {texts[language].errorPage.return}
                </Text>
            </ContainerMessage>
        </Container>
    );
};

export default ErrorPage;
