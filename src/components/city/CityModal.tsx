import React, { useContext } from 'react';

import SelectCity from './SelectCity';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';

import { makeStyles, Theme } from '@material-ui/core';
import { DivarReducerActionTypes } from '../../data/divarReducer';
import { DivarContext } from '../../data/DivarContext';

const CityModal: React.FunctionComponent = () => {
    const classes = useStyles();
    const { dispatch } = useContext(DivarContext);

    const closeHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation();
        dispatch({ type: DivarReducerActionTypes.ToggleSelectCityVisible });
    };

    return (
        <>
            <Box className={classes.modalContainer}>
                <Box m="5rem" p="5rem" bgcolor="white" borderRadius="1rem">
                    <Box display="flex" flexDirection="row" mb="2rem">
                        <Typography className={classes.selectCityTitle} variant="h3">
                            انتخاب شهر
                        </Typography>
                        <IconButton onClick={closeHandler}>
                            <Close fontSize="large" />
                        </IconButton>
                    </Box>
                    <SelectCity />
                </Box>
            </Box>
        </>
    );
};

//Styles
const useStyles = makeStyles((theme: Theme) => ({
    modalContainer: {
        zIndex: 101,
        backgroundColor: '#aaaa',
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        position: 'fixed',
        top: 0,
        left: 0,
    },
    selectCityTitle: {
        display: 'flex',
        flexGrow: 1,
    },
    selectCityClose: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
}));
export default CityModal;
