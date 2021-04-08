import React, { ReactNode } from 'react';
//Components
import Header from '../Header/Header';
import Sidebar from '../SecSidebar/Sidebar';

// Material Components
import Box from '@material-ui/core/Box';

//React-router-dom
import { BrowserRouter } from 'react-router-dom';
import DivarProvider from '../data/DivarProvider';

const Layout: React.FunctionComponent<{
    children: ReactNode;
}> = ({ children }) => {
    return (
        <>
            <Header />
            <Box mt="5.5rem" position="relative" display="flex" flexDirection="row">
                {children}
            </Box>
        </>
    );
};

export default Layout;
