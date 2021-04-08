import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';

import React, { useContext } from 'react';
import { DivarContext, useDivarContext } from '../data/DivarContext';
import { DivarReducerActionTypes } from '../data/divarReducer';
import { makeStyles } from '@material-ui/core/styles';

import { Link as LinkRouter } from 'react-router-dom';

const SidebarGoBack: React.FunctionComponent = () => {
    const classes = useStyles();
    const { state } = useDivarContext();

    return (
        <ListItem disableGutters>
            <LinkRouter to={`/s/${state.city[2]}/`} className={classes.goBackToAllBox}>
                <ArrowRight fontSize="large" />
                <Typography component="h3" className={classes.goBackToAllText}>
                    همهٔ آگهی‌ها
                </Typography>
            </LinkRouter>
        </ListItem>
    );
};

//Styles
const useStyles = makeStyles({
    goBackToAllBox: {
        display: 'flex',
    },
    goBackToAllText: {
        fontFamily: 'Vazir',
        fontSize: '1.3rem',
        color: 'var(--font-clr-secondary)',
    },
});

export default SidebarGoBack;
