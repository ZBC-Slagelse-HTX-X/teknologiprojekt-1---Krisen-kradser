import React, { createContext, useContext, useState, ReactNode } from 'react';

type FontContextType = {
    dyslexiaMode: boolean;
    setDyslexiaMode: () => void;
};

const FontContex = createContext<FontContextType | undefined>(undefined);

export const FontProvider:React.FC<{children:ReactNode}> = ({children}) => {
    const [dyslexiaMode, SetIsDyslexiaMode] = useState(false);

    const setDyslexiaMode = () => {
        SetIsDyslexiaMode(prev => !prev);
    };

    return (
        <FontContex.Provider value={{dyslexiaMode, setDyslexiaMode}}>
            { children }
        </FontContex.Provider>
    );
};

export const useFont = () => {
    const context = useContext(FontContex);
    if(!context) throw new Error("useFont must be used within a FontProvider Element");
    return context;
};