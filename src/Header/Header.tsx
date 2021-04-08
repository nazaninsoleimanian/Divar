import React from 'react';
import Hamburger from '../Header/Hamburger';
import MenuHeader from '../Header/MenuHeader';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import { useDivarContext } from '../data/DivarContext';
import { DivarReducerActionTypes } from '../data/divarReducer';
import { LocationOn } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { GrLocation } from 'react-icons/gr';

const Header: React.FunctionComponent = () => {
    const classes = useStyles();
    const { state, dispatch } = useDivarContext();
    const selectCity = () => {
        dispatch({ type: DivarReducerActionTypes.ToggleSelectCityVisible });
    };
    return (
        <Box component="header" className={classes.header}>
            <Box component="nav" className={classes.headerNavBar}>
                <Box display="flex" alignItems="center" flexGrow="1">
                    <Link to={`/s/${state.city[2]}`}>
                        <Box className={classes.headerLogo}></Box>
                    </Link>
                    <Button
                        startIcon={<GrLocation className={classes.headerIconBtn} />}
                        className={classes.selectCity}
                        customVariant="location"
                        onClick={selectCity}
                    >
                        {state.city[1]}
                    </Button>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    flexGrow="1"
                    justifyContent="flex-end"
                >
                    <Hidden smDown>
                        <Box display="flex" flexDirection="row" alignItems="center">
                            <MenuHeader menuLocation="nav" />
                        </Box>
                    </Hidden>
                    <Button customVariant="main">ثبت آگهی</Button>
                    <Hidden mdUp>
                        <Hamburger />
                    </Hidden>
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles({
    header: {
        width: '100%',
        height: '5.5rem',
        position: 'fixed',
        backgroundColor: 'var(--bg-clr-main)',
        borderBottom: 'var(--border-main)',
        top: 0,
        zIndex: 100,
    },
    headerNavBar: {
        padding: '0 2rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
    },
    headerLogo: {
        width: '4rem',
        height: '4rem',
        background:
            'url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMjUuNiA3Ni40IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOiNjMTBjMWF9PC9zdHlsZT48ZyBpZD0iWE1MSURfM18iPjxnIGlkPSJYTUxJRF83XyI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk5LjUgNjIuM2MtMS43IDAtMy4zLTEuMS0zLjgtMi44LS43LTIuMS41LTQuNCAyLjYtNSAxOC45LTYgMTkuMi0xMC42IDE5LjMtMTMuMS4yLTMuOS0yLjgtOC45LTQtMTAuNi0xLjMtMS44LS45LTQuMy45LTUuNiAxLjgtMS4zIDQuMy0uOSA1LjYuOS42LjggNiA4LjMgNS41IDE1LjgtLjUgOS4xLTcuNSAxNC43LTI0LjkgMjAuMy0uNCAwLS44LjEtMS4yLjF6IiBpZD0iWE1MSURfMjZfIi8+PC9nPjxnIGlkPSJYTUxJRF84XyI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1LjIgNzYuNGMtMS4yIDAtMi40LS41LTMuMS0xLjUtMS40LTEuNy0xLjEtNC4zLjctNS42QzUxIDYyLjggNTYuNSA1NyA2MC4xIDUxLjljLTItMS00LjEtMi41LTUuMi01LTEtMi4zLTEuNi02LjEgMS45LTExLjIgNS03LjQgMTAtOS4xIDExLjktOS41IDIuNi0uNSA1LjEgMSA1LjggMy41LjUgMS44IDEuNyA3LjUtMS45IDE2LjIgNC44LS4xIDguNi0xLjQgMTEuNS0zLjhDODkuNyAzNy42IDkwIDMwIDkwIDI5LjljLjEtMi4yIDEuOS0zLjkgNC4xLTMuOSAyLjIuMSAzLjkgMS45IDMuOSA0LjEgMCAuNC0uNCAxMS4xLTguNyAxOC4xLTUuMiA0LjQtMTIuMyA2LjMtMjAuOSA1LjYtNC4xIDYuMy0xMC42IDEzLjctMjAuNyAyMS43LS44LjYtMS42LjktMi41Ljl6TTY2LjkgMzZjLTEuMS45LTIuMyAyLjItMy42IDQuMi0xLjMgMi0xLjQgMy4xLTEuMyAzLjQuMi41IDEuMiAxIDIuMiAxLjQgMS45LTMuOCAyLjUtNi44IDIuNy05eiIgaWQ9IlhNTElEXzIzXyIvPjwvZz48ZyBpZD0iWE1MSURfOV8iPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Mi4yIDU0LjloLS42Yy0yLjItLjMtMy43LTIuNC0zLjQtNC42IDIuNy0xNy44IDMuNi00Ni4yIDMuNi00Ni40LjItMi4yIDEuOS00IDQuMi0zLjkgMi4yLjEgMy45IDEuOSAzLjkgNC4xIDAgMS4yLTEgMjkuMS0zLjcgNDcuNC0uMyAyLTIgMy40LTQgMy40eiIgaWQ9IlhNTElEXzIyXyIvPjwvZz48ZyBpZD0iWE1MSURfMTFfIj48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNCA3Ni40Yy0xLjIgMC0yLjUtLjYtMy4yLTEuNi0xLjMtMS44LS45LTQuMy45LTUuNiAyMi4xLTE2LjEgMjMuMS0zNi42IDIzLjEtMzcuNC4xLTIuMiAxLjktNCA0LjEtMy45IDIuMi4xIDMuOSAxLjkgMy45IDQuMSAwIDEtMSAyNS4yLTI2LjQgNDMuNy0uOC41LTEuNi43LTIuNC43eiIgaWQ9IlhNTElEXzIxXyIvPjwvZz48ZyBpZD0iWE1MSURfMTNfIj48cGF0aCBkPSJNNzEuOSA2OGMtMi4xIDAtMy45LTEuNy00LTMuOS0uMS0yLjIgMS42LTQuMSAzLjgtNC4yLjEgMCA2LjQtLjMgMTUuMy0yLjIgMi4yLS41IDQuMy45IDQuOCAzLjFzLS45IDQuMy0zLjEgNC44Qzc5LjEgNjcuOCA3Mi40IDY4IDcyLjEgNjhoLS4yeiIgZmlsbD0iIzU3NTc1NiIgaWQ9IlhNTElEXzIwXyIvPjwvZz48L2c+PC9zdmc+) no-repeat 50% !important',
    },
    selectCity: {
        border: 'none',
        marginRight: '2rem',
    },
    headerIconBtn: {
        marginLeft: '1rem',
        fontSize: '1.4rem',
        margin: 0,
    },
});

export default Header;
