import { Grommet } from 'grommet';
import { ReactNode, createContext, useContext, useState } from 'react';
import { theme } from '../styles';

interface IAppContext {
    /** Is theme in dark mode or not */
    dark: boolean;
    /** Sets the theme to dark mode or not */
    setDark: (value: React.SetStateAction<boolean>) => void;
}
const AppContext = createContext<IAppContext>({ dark: false, setDark: () => {} });

/** Provides App context to all children */
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [dark, setDark] = useState(true);

    return (
        <AppContext.Provider value={{ dark, setDark }}>
            <Grommet theme={theme} full themeMode={dark ? 'dark' : 'light'}>
                {children}
            </Grommet>
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useApp must be used within a AppProvider');
    }

    return context;
};
