import { Grommet } from 'grommet';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { theme } from '../styles';
import { Provider, useDispatch } from 'react-redux';
import { setThemeModeAction } from '../redux/actions';
import { store } from '../redux';

interface IAppContext {
    /** Is theme in dark mode or not */
    dark: boolean;
    /** Sets the theme to dark mode or not */
    setDark: (value: React.SetStateAction<boolean>) => void;
}
const AppContext = createContext<IAppContext>({ dark: false, setDark: () => {} });

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [dark, setDark] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setThemeModeAction(dark ? 'dark' : 'light'));
    }, [dark, dispatch]);

    return (
        <AppContext.Provider value={{ dark, setDark }}>
            <Grommet theme={theme} full themeMode={dark ? 'dark' : 'light'}>
                {children}
            </Grommet>
        </AppContext.Provider>
    );
};

/** Provides App context to all children */
export const AppProvider = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
        <ContextProvider>{children}</ContextProvider>
    </Provider>
);

export const useApp = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useApp must be used within a AppProvider');
    }

    return context;
};
