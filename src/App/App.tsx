import { Box, Button, Grid, Grommet, Page, PageContent, PageHeader, Text } from 'grommet';
import { Moon, Sun } from 'grommet-icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { AppBar, CardTemplate } from '../components';
import { setThemeModeAction } from '../redux/actions';

import { theme } from '../styles';

const App = () => {
    const [dark, setDark] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setThemeModeAction(dark ? 'dark' : 'light'));
    }, [dark, dispatch]);

    return (
        <Grommet theme={theme} full themeMode={dark ? 'dark' : 'light'}>
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
        </Grommet>
    );
};

export default App;
