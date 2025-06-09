import { createContext } from "react";

type GeneralContextType = {
    votreTitre: string | null,
};

type utilisateurContext = {
    nom: string,
};

const Context = createContext<GeneralContextType | undefined>(undefined);

