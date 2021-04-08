import React from 'react';
import { MenuProps } from '../Header/MenuHeader';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link as LinkMui } from '@material-ui/core';
import { Link as LinkRouter } from 'react-router-dom';

const LinkHeader: React.FunctionComponent<MenuProps> = (props) => {
    const useStyleProps: MenuProps = {
        menuLocation: props.menuLocation,
    };
    const classes = useStyles(useStyleProps);

    return (
        <>
            <LinkMui component={LinkRouter} to="/" className={classes.linkHeader}>
                دیوار من
            </LinkMui>
            <LinkMui component={LinkRouter} to="/" className={classes.linkHeader}>
                چت
            </LinkMui>
            <LinkMui component={LinkRouter} to="/" className={classes.linkHeader}>
                درباره‌ی دیوار
            </LinkMui>
            <LinkMui component={LinkRouter} to="/" className={classes.linkHeader}>
                بلاگ
            </LinkMui>
            <LinkMui component={LinkRouter} to="/" className={classes.linkHeader}>
                پشتیانی
            </LinkMui>
        </>
    );
};

const padding = {
    nav: '0 1.5rem',
    bars: '1rem 1.2rem 1rem 7rem',
};
const color = {
    nav: 'var(--font-clr-secondary)',
    bars: 'inherit',
};
const backgroundColor = {
    nav: 'transparent',
    bars: 'var(--bg-clr-hover)',
};
const useStyles = makeStyles<Theme, MenuProps>((theme: Theme) => ({
    linkHeader: {
        color: 'var(--font-clr-primary)',
        transition: 'all 0.2s',
        textDecoration: 'none !important',
        fontSize: '1.4rem',
        fontWeight: 300,
        padding: (props) => padding[props.menuLocation],
        '&:hover': {
            color: (props) => color[props.menuLocation],
            backgroundColor: (props) => backgroundColor[props.menuLocation],
        },
    },
}));

export default LinkHeader;
