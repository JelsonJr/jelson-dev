import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { LanguagesContext } from "../../context/contextLanguage";
import { Container, Fade, MainContainer, StyledSection, Text } from "./styles";

const ScrollText = ({ paragraphs }) => {
    const { texts, language } = useContext(LanguagesContext);
    const [viewText, setViewText] = useState(false);

    const handleUpdateText = () => {
        console.log(texts[language].tips.scrollText[viewText]);
        setViewText(!viewText);
    };

    return (
        <MainContainer>
            <Fade $viewText={viewText} />
            <StyledSection $viewText={viewText}>
                <Container $viewText={viewText} onClick={handleUpdateText}>
                    {paragraphs.map((text, index) => (
                        <Text
                            $viewText={viewText}
                            key={index}
                            data-tooltip-id="tipText"
                            data-tooltip-content={texts[language].tips.scrollText[viewText]}
                        >
                            {text}
                        </Text>
                    ))}
                </Container>
                <Tooltip id="tipText" />
            </StyledSection>
        </MainContainer>
    );
};

ScrollText.propTypes = {
    paragraphs: PropTypes.array.isRequired,
};

export default ScrollText;
