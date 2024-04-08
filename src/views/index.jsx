import styled from "styled-components";
import MyProjects from "views/MyProjects";
import Contact from "views/Contact";
import Footer from "components/Footer";
import NavigationMenu from "components/NavigationMenu";
import Home from "views/Home";
import AboutMe from "views/AboutMe";
import { useState } from "react";

const Container = styled.main`
    opacity: ${props => (props.$isMenuOpen ? 0.6 : 1)};
`;

const MainPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <NavigationMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            <Container $isMenuOpen={isMenuOpen}>
                <Home />
                <AboutMe />
                <MyProjects />
                <Contact />
                <Footer />
            </Container>
        </>
    );
};

export default MainPage;
