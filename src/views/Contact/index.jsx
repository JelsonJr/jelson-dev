import styled from "styled-components";
import { Title } from "../../components/Title";

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(to bottom, #031449, #034dae);
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 300px;
    height: 100px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition:
        box-shadow 0.3s ease,
        background-color 0.5s ease,
        height 0.5s ease,
        opacity 0.5s ease;

    h2 {
        margin-top: 50px;
    }

    &:hover {
        box-shadow: none;
        height: 500px;
        background-color: #fe4a4a;
        button,
        div {
            opacity: 1;
        }
    }

    button {
        border: 2px solid #032552;
        border-radius: 20px;
        background-color: transparent;
        color: #032552;
        padding: 6px 8px;
        font-size: 14px;
        opacity: 0;
        cursor: pointer;
    }

    div {
        display: flex;
        align-items: center;
        gap: 20px;
        border-radius: 20px;
        padding: 0 10px;
        background-color: #032552;
        opacity: 0;

        &:hover {
            cursor: pointer;
        }
    }

    div p {
        font-family: monospace;
        font-size: 1.5em;
        font-weight: 500;
        color: #fff;
    }
`;

const Contact = () => {
    return (
        <Container id="contact">
            <Title>contato</Title>
            <CardsContainer>
                <Card>
                    <h2>whatsapp</h2>
                    <button>clique aqui para falar comigo</button>
                    <div>
                        <p>+55 42 99136-1180</p>
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
                    </div>
                </Card>
                <Card>
                    <h2>instagram</h2>
                    <button>visualize meu perfil</button>
                    <div>
                        <p>@rodrigues_jelsonjr</p>
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
                    </div>
                </Card>
                <Card>
                    <h2>linkedin</h2>
                    <button>visualize meu perfil</button>
                    <div>
                        <p>Jelson Rodrigues</p>
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
                    </div>
                </Card>
                <Card>
                    <h2>github</h2>
                    <button>visualize meus repositórios</button>
                    <div>
                        <p>JelsonJr</p>
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
                    </div>
                </Card>
            </CardsContainer>
        </Container>
    );
};

export default Contact;
