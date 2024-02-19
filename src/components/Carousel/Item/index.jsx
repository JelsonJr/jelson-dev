import PropTypes from "prop-types";
import { Container, Image, Info, Link, ProjectDescription, ProjectName } from "./styles";
import { useContext } from "react";
import { LanguagesContext } from "context/contextLanguage";

const Item = ({ image, alt, name, description, link }) => {
    const { language, texts } = useContext(LanguagesContext);

    return (
        <Container>
            <Image>
                <img src={image} alt={alt} />
            </Image>
            <Info>
                <ProjectName>{name}</ProjectName>
                <ProjectDescription>{description}</ProjectDescription>
                <Link target="blank" href={link}>
                    {texts[language].carrouselLink}
                </Link>
            </Info>
        </Container>
    );
};

Item.propTypes = {
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Item;
