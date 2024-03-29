import { Title } from "components/Title";
import { CardsContainer, Container } from "./styles";
import Card from "./Card";
import Contacts from "mocks/contacts.json";

const Contact = () => {
    return (
        <Container id="contact">
            <Title>contato</Title>
            <CardsContainer>
                {Contacts.map(({ title, contact, background, alt, icon, link }, idx) => (
                    <Card key={idx} icon={icon} title={title} link={link} contact={contact} alt={alt} background={background} />
                ))}
            </CardsContainer>
        </Container>
    );
};

export default Contact;
