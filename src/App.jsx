import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { LanguagesProvider } from "./context/contextLanguage";
import GlobalStyles from "./components/GlobalStyles";
import NavigationMenu from "./components/NavigationMenu";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import ErrorPage from "./views/ErrorPage";
import "react-tooltip/dist/react-tooltip.css";
import MyProjects from "./views/MyProjects";

const Container = styled.main`
    opacity: ${props => (props.$isMenuOpen ? 0.6 : 1)};
`;

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <LanguagesProvider>
            <BrowserRouter>
                <GlobalStyles />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <NavigationMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                                <Container $isMenuOpen={isMenuOpen}>
                                    <Home />
                                    <AboutMe />
                                    <MyProjects />
                                </Container>
                            </>
                        }
                    />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </LanguagesProvider>
    );
}

export default App;
