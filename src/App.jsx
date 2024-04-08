import GlobalStyles from "components/GlobalStyles";
import MainPage from "views";
import ErrorPage from "views/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguagesProvider } from "context/contextLanguage";
import { ToastContainer } from "react-toastify";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

register();

function App() {
    return (
        <LanguagesProvider>
            <BrowserRouter>
                <GlobalStyles />
                <Routes>
                    <Route path="/" element={<MainPage />} />
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
