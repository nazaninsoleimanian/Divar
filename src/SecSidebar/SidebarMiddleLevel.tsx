import React from 'react';
import { ListItem } from '@material-ui/core';
import { Link as LinkRouter } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Button from '../components/Button';

import { useDivarContext } from '../data/DivarContext';

interface IsidebarMiddleLevel {
    name: string;
    icon: string;
    id: number;
    slug: string;
    second_slug: string;
    children: {}[];
    parent: string;
    second_name: string;
    url: {};
}

const SidebarMiddleLevel: React.FunctionComponent<{
    middleCategoty: IsidebarMiddleLevel;
}> = ({ middleCategoty }) => {
    const classes = useStyles();
    const { state } = useDivarContext();

    const { name, id, slug } = middleCategoty;

    return (
        <ListItem key={id} className={classes.sliderMiddleLevelList}>
            <LinkRouter to={`/s/${state.city[2]}/${slug}`}>
                <Button customVariant="filter">{name}</Button>
            </LinkRouter>
        </ListItem>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sliderMiddleLevelList: {
            paddingRight: '6rem',
        },
    }),
);
export default SidebarMiddleLevel;
