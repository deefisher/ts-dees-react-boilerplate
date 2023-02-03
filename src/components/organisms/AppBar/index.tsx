import { Header, HeaderProps } from 'grommet';
import React from 'react';

export interface AppBarProps extends HeaderProps {
    /** AppBar component children */
    children?: React.ReactNode;
}

/** AppBar for this application */
export const AppBar = ({ ...props }: AppBarProps) => {
    return (
        <Header
            background="brand"
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation="medium"
            a11yTitle="AppBar"
            {...props}
        />
    );
};
