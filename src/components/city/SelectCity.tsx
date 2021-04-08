import { Box, InputAdornment, makeStyles, TextField, Theme } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { DivarContext } from '../../data/DivarContext';
import DivarReducer, { DivarReducerActionTypes } from '../../data/divarReducer';
import preLoad from '../../data/preLoadData';
import CityBox from './CityBox';

const SelectCity = () => {
    const { state } = useContext(DivarContext);
    const [searchText, setSearchText] = useState('');
    const [allCities, setAllCities] = useState(state.data.city.compressedData);
    const classes = useStyles();

    const topCities = state.data.city.topCities.map((item) => {
        const city = state.data.city.compressedData.find((comporessedData) => {
            if (comporessedData[2] === item) return true;
            return false;
        });
        if (city) return city;
        return [[]];
    });

    useEffect(() => {
        setAllCities(
            state.data.city.compressedData.filter((item) => {
                if (
                    (item[1] as string).includes(searchText) ||
                    (item[2] as string).includes(searchText)
                )
                    return true;
                return false;
            }),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText]);

    return (
        <Box maxWidth="90rem" bgcolor="white">
            <TextField
                variant="outlined"
                placeholder="جست‌و‌جوی سریع شهر ..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search fontSize="large" />
                        </InputAdornment>
                    ),
                    className: classes.searchInput,
                }}
                className={classes.search}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText === '' && <CityBox cities={topCities} title="شهرهای پر بازدید" />}
            <CityBox cities={allCities} title={searchText === '' ? 'همه شهرها' : ''} />
        </Box>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    search: {
        width: '100%',
        fontSize: '4rem',
    },
    searchInput: {
        fontSize: '2rem',
    },
}));

export default SelectCity;
