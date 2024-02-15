import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { LanguagesProvider } from "context/contextLanguage";
import GlobalStyles from "components/GlobalStyles";
import NavigationMenu from "components/NavigationMenu";
import Home from "views/Home";
import AboutMe from "views/AboutMe";
import ErrorPage from "views/ErrorPage";
import MyProjects from "views/MyProjects";
import Contact from "views/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

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
                                    <Contact />
                                </Container>
                            </>
                        }
                    />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
                <ToastContainer
                    position="bottom-center"
                    autoClose={2500}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </BrowserRouter>
        </LanguagesProvider>
    );
}

export default App;
