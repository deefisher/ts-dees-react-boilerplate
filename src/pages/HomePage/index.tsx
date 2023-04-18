import { Box, Button, Grid, Page, PageContent, PageHeader, Text } from 'grommet';
import { AppBar, CardTemplate } from '../../components';
import { Moon, Sun } from 'grommet-icons';
import { useApp } from '../../App';

export const HomePage = () => {
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
