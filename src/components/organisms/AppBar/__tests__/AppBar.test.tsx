import { render } from '@testing-library/react';
import { AppBar } from '..';
import { AppProvider } from '../../../../App';

describe('AppBar', () => {
    it('renders AppBar unchanged', () => {
        const { container } = render(
            <AppProvider>
                <AppBar />
            </AppProvider>,
        );
        expect(container).toMatchSnapshot();
    });
});
