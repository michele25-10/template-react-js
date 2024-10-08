import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './i18n/en.json';
import itJSON from './i18n/it.json';
i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        it: { ...itJSON },
    },
    lng: "it",
});