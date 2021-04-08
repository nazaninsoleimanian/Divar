import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import LinkHeader from '../Header/LinkHeader';
import { makeStyles, Theme } from '@material-ui/core/styles';

const MenuHeader: React.FunctionComponent<MenuProps> = (props) => {
    const useStyleProps: MenuProps = {
        menuLocation: props.menuLocation,
    };
    const classes = useStyles(useStyleProps);

    return (
        <Box className={classes.menuHeader}>
            <LinkHeader menuLocation={props.menuLocation} />
        </Box>
    );
};

export interface MenuProps {
    menuLocation: 'nav' | 'bars';
}

const display = {
    nav: 'flex',
    bars: 'flex',
};

const flexDirection = {
    nav: 'row',
    bars: 'column',
};

const backgroundColor = {
    nav: 'inherit',
    bars: 'var(--bg-clr-main)',
};

const border = {
    nav: 'none',
    bars: 'var(--border-main)',
};

const borderRadius = {
    nav: 'none',
    bars: '.3rem',
};

const boxShadow = {
    nav: 'none',
    bars: 'var(--box-shadow)',
};

const useStyles = makeStyles<Theme, MenuProps>((theme: Theme) => ({
    menuHeader: {
        display: (props) => display[props.menuLocation],
        flexDirection: (props) => flexDirection[props.menuLocation] as 'row' | 'column',
        backgroundColor: (props) => backgroundColor[props.menuLocation],
        border: (props) => border[props.menuLocation],
        borderRadius: (props) => borderRadius[props.menuLocation],
        boxShadow: (props) => boxShadow[props.menuLocation],
    },
}));

export default MenuHeader;
