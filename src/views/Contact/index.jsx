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
    gap: 16px;
    max-width: 1200px;
    margin: 0 auto;
`;

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition:
        box-shadow 0.3s ease,
        background-color 0.3s ease;

    cursor: pointer;

    &:hover {
        box-shadow: none;
        background-color: rgba(255, 255, 255, 0.6);
        height: 500px;
    }
`;

const Contact = () => {
    return (
        <Container id="contact">
            <Title>contato</Title>
            <CardsContainer>
                <Card>whatsapp</Card>
                <Card>instagram</Card>
                <Card>linkedin</Card>
                <Card>github</Card>
            </CardsContainer>
        </Container>
    );
};

export default Contact;
