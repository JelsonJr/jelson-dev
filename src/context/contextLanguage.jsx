import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import texts from "../mocks/texts.json";

export const LanguagesContext = createContext();

export const LanguagesProvider = ({ children }) => {
    const [language, setLanguage] = useState("pt-BR");

    useEffect(() => {
        const userLanguage = navigator.language || navigator.userLanguage;
        if (!texts[userLanguage]) return;

        setLanguage(userLanguage);
    }, []);

    return <LanguagesContext.Provider value={{ language, setLanguage, texts }}>{children}</LanguagesContext.Provider>;
};

LanguagesProvider.propTypes = { children: PropTypes.node.isRequired };
