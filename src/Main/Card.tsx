import React, { useState } from 'react';
import Picture from './Picture';
import Box from '@material-ui/core/Box';
import { Grid, Link as LinkMui } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BiMessageRounded } from 'react-icons/bi';
import { Link as LinkRouter, Route, Switch } from 'react-router-dom';
import { IAdvertise } from '../data/interfaces';
import ProductPage from '../Page/ProductPage/ProductPage';

const Card: React.FunctionComponent<{
    adv: IAdvertise;
}> = ({ adv }) => {
    const classes = useStyles();
    const {
        category,
        description,
        has_chat,
        image,
        web_image,
        normal_text,
        red_text,
        title,
        token,
    } = adv.data;

    const [titleCategoryEncoded, setTitleCategoryEncoded] = useState(
        encodeURIComponent(
            title.replaceAll(' ', '-') + '-' + category.replaceAll(' ', '-'),
        ),
    );
    return (
        <>
            <Grid item className={classes.postCardBox}>
                <LinkMui
                    component={LinkRouter}
                    to={`/v/Product/${token}`}
                    className={classes.postCardLink}
                >
                    <Grid item zeroMinWidth className={classes.postCardBody}>
                        <Typography component="h3" className={classes.postCardTitle}>
                            {title}
                        </Typography>
                        <Box>
                            <Typography
                                component="h5"
                                className={classes.postCardDescription}
                            >
                                {description}
                            </Typography>
                            <Typography
                                component="h5"
                                className={classes.postCardDescription}
                            >
                                <Typography
                                    component="span"
                                    className={classes.postCardTextRed}
                                >
                                    {red_text}
                                </Typography>
                                {normal_text}
                            </Typography>
                            {has_chat && (
                                <BiMessageRounded className={classes.postCardMessage} />
                            )}
                        </Box>
                    </Grid>
                    <Grid item className={classes.postCardThumbnail}>
                        <Picture img={image} />
                    </Grid>
                </LinkMui>
            </Grid>
        </>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    postCardBox: {
        position: 'relative',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flex: '0 0 100%',
            maxWidth: '100%',
        },
        [theme.breakpoints.up('md')]: {
            flex: '0 0 50%',
            maxWidth: '50%',
        },
        [theme.breakpoints.up('lg')]: {
            flex: '0 0 33.333333%',
            maxWidth: '33.333333%',
        },
    },
    postCardLink: {
        textDecoration: 'none !important',
        position: 'relative',
        padding: '1.6rem',
        height: '16.8rem',
        border: 'var(--border-main)',
        borderRadius: '.4rem',
        display: 'flex',
        minWidth: '30rem',
    },
    postCardThumbnail: {
        position: 'relative',
        width: '13.6rem',
        height: '13.6rem',
        flex: '0 0 13.6rem',
        backgroundColor: 'var(--bg-clr-hover)',
        overflow: 'hidden',
        borderRadius: '.4rem',
    },
    postCardBody: {
        position: 'relative',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: '1rem',
        minWidth: '8rem',
    },
    postCardTitle: {
        fontFamily: 'Vazir',
        fontWeight: 600,
        fontSize: '1.4rem',
        color: 'var(--font-clr-primary)',
        height: '10rem',
        overflowWrap: 'break-word',
        overflow: 'hidden',
    },
    postCardDescription: {
        paddingLeft: '2rem',
        fontFamily: 'Vazir',
        fontWeight: 500,
        fontSize: '1.3rem',
        color: 'var(--font-clr-secondary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'pre',
    },
    postCardTextRed: {
        fontFamily: 'Vazir',
        fontWeight: 600,
        fontSize: '1.3rem',
        color: '#a62626',
    },
    postCardMessage: {
        fontSize: '1.6rem',
        color: 'var(--font-clr-secondary)',
        position: 'absolute',
        bottom: 0,
        left: '1rem',
    },
}));

export default Card;
