import React from 'react';
//Material Component

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingSpinner = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="80vh"
        >
            <CircularProgress color="secondary" size="60px" />
            <Typography variant="h6" style={{ fontFamily: 'Vazir' }}>
                در حال دریافت...
            </Typography>
        </Box>
    );
};

export default LoadingSpinner;
