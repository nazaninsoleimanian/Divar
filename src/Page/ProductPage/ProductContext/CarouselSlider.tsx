import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useProductContext } from './ProductProvider';
import logo from '../../../logo/logo.svg';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import classes from '*.module.css';
import Picture from '../../../Main/Picture';

const CarouselSlider: React.FunctionComponent = () => {
    const classes = useStyles();

    const { pageData, getPageData } = useProductContext();
    const images =
        'widgets' in pageData
            ? pageData.widgets.images.map((imageUrl: string) => ({
                  imageUrl,
              }))
            : [];
    console.log('img', images);

    return (
        <>
            {/* <Carousel
                showArrows={true}
                verticalSwipe="standard"
                className={classes.carouselContainer}
            >
                {images.map((url) => {
                    return (
                        <Box className={classes.carouselList}>
                            <Picture img={url.imageUrl} />
                        </Box>
                    );
                })}
            </Carousel> */}
            <Box className={classes.carouselContainer}>
                {images.map((url) => {
                    return (
                        <Box className={classes.carouselList}>
                            <Picture img={url.imageUrl} />
                        </Box>
                    );
                })}
            </Box>
        </>
    );
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        carouselContainer: {
            position: 'relative',
            width: '48.8rem',
            height: '48.8rem',
            flex: '0 0 48.8rem',
            backgroundColor: 'var(--bg-clr-hover)',
            overflow: 'hidden',
            borderRadius: '.4rem',
        },
        carouselList: {
            width: '48.8rem',
            height: '5rem',
            borderRadius: '.4rem',
        },
    }),
);

export default CarouselSlider;
