import Home from "./views/Home";
import GlobalStyles from "./components/GlobalStyles";
import { LanguagesProvider } from "./context/contextLanguage";

function App() {
    return (
        <>
            <LanguagesProvider>
                <GlobalStyles />
                <Home />
            </LanguagesProvider>
        </>
    );
}

export default App;
