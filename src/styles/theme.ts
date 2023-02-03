import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
export const theme = deepMerge(grommet, {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
});
