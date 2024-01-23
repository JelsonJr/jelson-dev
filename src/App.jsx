import { useState } from "react";
import styled from "styled-components";
import { LanguagesProvider } from "./context/contextLanguage";
import GlobalStyles from "./components/GlobalStyles";
import NavigationMenu from "./components/NavigationMenu";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";

const Container = styled.main`
    opacity: ${props => (props.$isMenuOpen ? 0.6 : 1)};
`;

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <LanguagesProvider>
            <GlobalStyles />
            <NavigationMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            <Container $isMenuOpen={isMenuOpen}>
                <Home />
                <AboutMe />
            </Container>
        </LanguagesProvider>
    );
}

export default App;
