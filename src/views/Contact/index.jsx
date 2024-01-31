import { Title } from "../../components/Title";
import { CardsContainer, Container } from "./styles";
import Card from "./Card";
import Contacts from "../../mocks/contacts.json";

const Contact = () => {
    return (
        <Container id="contact">
            <Title>contato</Title>
            <CardsContainer>
                {Contacts.map(({ title, buttonText, contact }, idx) => (
                    <Card key={idx} title={title} buttonText={buttonText} contact={contact} />
                ))}
            </CardsContainer>
        </Container>
    );
};

export default Contact;
