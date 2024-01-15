import styled from "styled-components";
import Header from "../../components/Header";
import BackgroundImage from "../../assets/images/background.jpg";

const Container = styled.section`
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    height: 100vh;
`;

const Home = () => {
    return (
        <Container>
            <Header />
        </Container>
    );
};

export default Home;
