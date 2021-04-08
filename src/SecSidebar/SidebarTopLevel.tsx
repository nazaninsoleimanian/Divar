import React, { useContext, useState } from 'react';
import { Box, List, ListItem } from '@material-ui/core';
import { Link as LinkRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Button from '../components/Button';

import { useDivarContext } from '../data/DivarContext';
import { DivarReducerActionTypes } from '../data/divarReducer';
import { type } from 'node:os';
import SidebarMiddleLevel from './SidebarMiddleLevel';

interface IFiterAdvType {
    name: string;
    icon: () => JSX.Element;
    id: number;
    slug: string;
    second_slug: string;
    children: {
        name: string;
        icon: string;
        id: number;
        slug: string;
        second_slug: string;
        children: {}[];
        parent: string;
        second_name: string;
        url: {};
    }[];
    parent: string;
    second_name: string;
    url: {};
}

const SidebarTopLevel: React.FunctionComponent<{
    category: IFiterAdvType;
}> = ({ category }) => {
    const classes = useStyles();
    const { state } = useDivarContext();

    const { name, icon, id, slug } = category;

    return (
        <>
            <ListItem
                disableGutters
                dense
                alignItems="flex-start"
                key={id}
                className={classes.sidebarTopLevelList}
            >
                <LinkRouter to={`/s/${state.city[2]}/${slug}`} className={classes.link}>
                    <Button
                        className={classes.button}
                        customVariant="filter"
                        startIcon={
                            <Box component="i" className={classes.sidebarIcon}>
                                {icon()}
                            </Box>
                        }
                    >
                        {name}
                    </Button>
                </LinkRouter>
            </ListItem>
        </>
    );
};

const useStyles = makeStyles({
    link: {
        width: '100%',
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    sidebarTopLevelList: {
        flexDirection: 'column',
        '&:hover sidebarIcon': {
            color: 'var(--font-clr-primary)',
        },
    },

    sidebarIcon: {
        fontSize: '1.7rem',
        color: 'var(--font-clr-secondary)',
        marginRight: '-.8rem',
        marginLeft: '1rem',
    },
});
export default SidebarTopLevel;
