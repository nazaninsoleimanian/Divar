import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { useProductContext } from './ProductContext/ProductProvider';
import { Box } from '@material-ui/core';

const CustomBreadCrumbs = () => {
    const classes = useStyles();
    const { pageData, getPageData } = useProductContext();
    const [navigationIcon, setNavigationIcon] = useState({
        toggleIcon: () => <NavigateBeforeIcon fontSize="small" />,
    });

    const mouseEnterHandler = () => {
        setNavigationIcon({
            toggleIcon: () => <NavigateNextIcon fontSize="small" />,
        });
    };

    const mouseLeaveHandler = () => {
        setNavigationIcon({
            toggleIcon: () => <NavigateBeforeIcon fontSize="small" />,
        });
    };

    return (
        <Box
            className={classes.root}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            {'widgets' in pageData ? (
                <Breadcrumbs
                    className={classes.breadcrumbs}
                    separator={navigationIcon.toggleIcon()}
                    aria-label="breadcrumb"
                >
                    {pageData.widgets.breadcrumb.categories
                        .map(({ title, relative_url }) => (
                            <Link style={{ color: 'gray' }} to={`/${relative_url}`}>
                                {title}
                            </Link>
                        ))
                        .reverse()
                        .filter((_, index) => index !== 0)}
                    {'data' in pageData ? (
                        <Typography
                            className={classes.breadcrumbs}
                            style={{ color: 'lightgray' }}
                        >
                            {pageData.data.share.title}
                        </Typography>
                    ) : null}
                </Breadcrumbs>
            ) : null}
        </Box>
    );
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '0 0 4rem ',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
        breadcrumbs: {
            fontSize: '1rem',
            fontFamily: 'Vazir',
        },
    }),
);
export default CustomBreadCrumbs;
