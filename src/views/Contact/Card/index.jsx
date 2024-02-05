import { Container, StyledDiv } from "./styles";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { LanguagesContext } from "../../../context/contextLanguage";

const Card = ({ title, contact, background, alt, icon, link }) => {
    const { texts, language } = useContext(LanguagesContext);
    const [isCopied, setIsCopied] = useState(false);

    const copyLink = () => {
        navigator.clipboard.writeText(contact);
        setIsCopied(true);
        toast(texts[language].copy);
        setTimeout(() => setIsCopied(false), 3450);
    };

    return (
        <Container>
            <h2>{title}</h2>
            <img src={background} alt={alt} />
            <div id="iconContainer">
                <img src={icon} alt="Icon" />
            </div>
            <StyledDiv>
                <a href={link} target="_blank" rel="noreferrer">
                    {contact}
                </a>
                <button onClick={copyLink}>
                    {(!isCopied && (
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
                    )) || (
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
                            className="feather feather-check-circle"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    )}
                </button>
            </StyledDiv>
        </Container>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;
