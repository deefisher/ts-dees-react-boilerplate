import { Box, Button, Grid, Grommet, Page, PageContent, PageHeader, Text } from 'grommet';
import { Moon, Sun } from 'grommet-icons';
import { ReactNode, createContext, useContext, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AppBar, CardTemplate } from '../components';
import { theme } from '../styles';

interface IAppContext {
    /** Is theme in dark mode or not */
    dark: boolean;
    /** Sets the theme to dark mode or not */
    setDark: (value: React.SetStateAction<boolean>) => void;
}
const AppContext = createContext<IAppContext>({ dark: false, setDark: () => {} });

/** Provides App context to all children */
const AppProvider = ({ children }: { children: ReactNode }) => {
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

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="*" element={<Navigate replace to={`/wrong-page`} />} />
                    <Route path={'/wrong-page'} element={<WrongPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Router>
        </AppProvider>
    );
};

export default App;

const MainPage = () => {
    const { dark, setDark } = useApp();

    return (
        <Page>
            <AppBar>
                <Text size="large">My App</Text>
                <Button
                    a11yTitle={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    icon={dark ? <Moon /> : <Sun />}
                    onClick={() => setDark(!dark)}
                    tip={{
                        content: (
                            <Box pad="small" round="small" background={dark ? 'dark-1' : 'light-3'}>
                                {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            </Box>
                        ),
                        plain: true,
                    }}
                />
            </AppBar>
            <PageContent>
                <PageHeader title="Welcome to Grommet!" />
                <Grid columns="medium" gap="large" pad={{ bottom: 'large' }}>
                    <CardTemplate title={'Card 1'} />
                    <CardTemplate title={'Card 2'} />
                    <CardTemplate title={'Card 3'} />
                </Grid>
            </PageContent>
        </Page>
    );
};

const WrongPage = () => (
    <Page>
        <PageContent>
            <PageHeader title="Wrong Page!" />
        </PageContent>
    </Page>
);
