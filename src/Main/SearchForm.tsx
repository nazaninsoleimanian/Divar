import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ILocationState } from '../data/interfaces';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const SearchForm: React.FunctionComponent<{
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}> = ({ searchText, setSearchText }) => {
    const classes = useStyles();

    const search = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
        }
    };
    return (
        <>
            <form className={classes.form}>
                <FormControl className={classes.formControl}>
                    <Input
                        id=""
                        value="همه ی آگهی ها"
                        disableUnderline
                        type="submit"
                        className={classes.searchSubmitBtn}
                    ></Input>
                    <Input
                        onKeyUp={(e) => search(e)}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                        ) => setSearchText(e.target.value)}
                        name="q"
                        value={searchText}
                        id=""
                        placeholder="جست وجو در آگهی ها"
                        disableUnderline
                        className={classes.searchInput}
                    ></Input>
                </FormControl>
            </form>
        </>
    );
};
const useStyles = makeStyles({
    form: {
        width: '100%',
    },
    formControl: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
    },
    searchSubmitBtn: {
        width: '25%',
        borderRadius: '0 .3rem .3rem 0',
        backgroundColor: 'rgba(34, 36, 38, 0.15)',
        fontSize: '1.4rem',
        fontFamily: 'Vazir',
    },
    searchInput: {
        width: '75%',
        padding: '1rem',
        borderRadius: '.3rem 0 0 .3rem;',
        border: '.1rem solid #bdbdbd;',
        fontSize: '1.4rem',
        fontFamily: 'Vazir',
        flex: 1,
    },
});

export default SearchForm;
