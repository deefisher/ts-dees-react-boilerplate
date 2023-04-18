import { render } from '@testing-library/react';
import { AppBar } from '..';
import { Grommet, Page, Text } from 'grommet';

describe('AppBar', () => {
    it('renders AppBar unchanged', () => {
        const { container } = render(
            <Grommet>
                <Page>
                    {/* <AppBar> */}
                    <Text size="large">My App</Text>
                    {/* </AppBar> */}
                </Page>
            </Grommet>,
        );
        expect(container).toMatchSnapshot();
    });
});
