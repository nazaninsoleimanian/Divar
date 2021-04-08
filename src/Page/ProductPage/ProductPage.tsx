import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import CustomBreadCrumbs from './CustomBreadCrumbs';
import Description from './Description';
import Footer from './ProductContext/Footer';
import CarouselSlider from './ProductContext/CarouselSlider';

const ProductPage: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.productContainer}>
                <Box className={classes.productContainerMain}>
                    <Box className={classes.productBoxDetails}>
                        <CustomBreadCrumbs />
                        <Description />
                    </Box>
                    <Box className={classes.productBoxDetails}>
                        <CarouselSlider />
                    </Box>
                </Box>
                <Footer />
            </Box>
        </>
    );
};

const useStyles = makeStyles(() => ({
    productContainer: {
        width: '990px',
        margin: '5rem auto 2rem',
        display: 'flex',
        flexDirection: 'column',
    },
    productContainerMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productBoxDetails: {
        flex: '1 1 45%',
        maxWidth: '45%',
    },
}));

export default ProductPage;
