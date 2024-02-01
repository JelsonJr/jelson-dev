import { Container, StyledDiv } from "./styles";
import PropTypes from "prop-types";

const Card = ({ title, contact, background, alt, icon }) => {
    return (
        <Container>
            <h2>{title}</h2>
            <img src={background} alt={alt} />
            <div id="iconContainer">
                <img src={icon} alt="Icon" />
            </div>
            <StyledDiv>
                <button>{contact}</button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-copy"
                >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </StyledDiv>
        </Container>
    );
};
//ajeitar posicao dos icons, separar botoes, ajustar posicao fixa dos cards na tela e ajustar responsividade
Card.propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Card;
