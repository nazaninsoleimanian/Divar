import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import SearchForm from './SearchForm';
import Card from './Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import { DivarContext } from '../data/DivarContext';
import { IAdvertise, IDivarState, ILocationState, ISuggestion } from '../data/interfaces';
import { DivarReducerActionTypes } from '../data/divarReducer';
import { fetchAdv } from '../api';
import { CircularProgress } from '@material-ui/core';
import Button from '../components/Button';

const Main: React.FunctionComponent = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(DivarContext);
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [suggestionList, setSuggestionList] = useState<ISuggestion[] | undefined>();
    const [ads, setAds] = useState<IAdvertise[]>([]);
    const [page, setPage] = useState<number>(0);
    const location = useLocation<ILocationState>();
    const pathArray = location.pathname.split('/');
    const [, , city, slug] = pathArray;
    const [isMounting, setIsMounting] = useState(false);
    const query = location.search;
    const changeCity = ([field1, field2, field3, ...data]: any[]) => {
        dispatch({
            type: DivarReducerActionTypes.ChangeCity,
            payload: { city: [field1, field2, field3] },
        });
    };
    const [searchText, setSearchText] = useState<string>(
        query.split('=')[1] ? decodeURIComponent(query.split('=')[1]) : '',
    );
    if (city !== state.city[2]) {
        const cityArray = state.data.city.compressedData.find((item) => item[2] === city);
        cityArray && changeCity(cityArray);
    }

    //----- WHY CALLBACK?!!! ------
    const fetchData = useCallback(
        async (resetData: boolean = false) => {
            const res = await fetchAdv({
                city: state.city,
                page: page,
                query: searchText,
                pathname: slug,
            });
            if (res.success) {
                if (resetData) {
                    setPage(0);
                    setAds(res.data);
                } else {
                    setAds((pre) => [...pre, ...res.data]);
                }
                setSuggestionList(res.suggestionList);
                setHasMore(res.hasMore !== undefined ? res.hasMore : true);
            } else {
                if (res.message === '404') {
                    // alert(res.message);
                    history.push('/404');
                }
            }
            setLoading(false);
        },
        [page, state.city, slug, searchText],
    );
    //--------------------------------------------------------

    useEffect(() => {
        if (!isMounting) {
            setIsMounting(true);
            return;
        }
        setLoading(true);
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        setLoading(true);
        fetchData(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.city, slug, searchText]);

    const lastObjectRef = useRef<HTMLDivElement | null>(null);
    const callback = useCallback(
        (entities: IntersectionObserverEntry[], observer: any) => {
            if (loading) return;
            if (!loading && entities[0].isIntersecting) {
                // observer.unobserve(entities[0].target);
                if (hasMore) setPage(page + 1);
                // setLoading(true);
                // dispatch({
                //     type: DivarReducerActionTypes.ChangeLoading,
                //     payload: { loading: true },
                // });
            }
        },
        [loading],
    );
    const observer = new IntersectionObserver(callback);
    const element = ReactDOM.findDOMNode(lastObjectRef.current);
    if (element) {
        observer.observe(element as Element);
    }
    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Box component="main" className={classes.main}>
            <Box component="header" className={classes.mainHeader}>
                <SearchForm searchText={searchText} setSearchText={setSearchText} />
                <Box
                    display="flex"
                    flexDirection="row"
                    mt="2rem"
                    flexWrap="wrap"
                    className={classes.suggestionList}
                >
                    {suggestionList &&
                        suggestionList.map((item) => (
                            <Link to={`/s/${state.city[2]}/${item.value.category.value}`}>
                                <Button customVariant="suggestion">
                                    {item.displayed_text}
                                </Button>
                            </Link>
                        ))}
                </Box>
            </Box>

            <Divider variant="middle" />
            <Box display="flex" flexDirection="column">
                <Box pt="2rem"></Box>

                <Grid container spacing={2}>
                    {ads &&
                        ads.map((item, index) => {
                            if (index + 1 === ads.length)
                                return (
                                    <>
                                        <Card key={item.token} adv={item} />
                                        <div ref={lastObjectRef}></div>
                                    </>
                                );
                            return <Card key={item.token} adv={item} />;
                        })}
                </Grid>
                <Box m="3rem" display={loading ? 'flex' : 'none'} justifyContent="center">
                    <CircularProgress />
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles({
    suggestionList: {
        '&>*': {
            marginBottom: '0.5rem',
            marginLeft: '0.5rem',
        },
    },
    main: {
        padding: '0 0 0 1.75rem',
        // marginRight: '300px',
        width: 'calc(auto - 5rem)',
        minHeight: '10rem',
        backgroundColor: 'var(--bg-clr-main)',
        order: 1,
        flex: 1,
    },
    mainHeader: {
        width: '100%',
        padding: '4rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
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
        padding: '1.5rem',
        borderRadius: '.3rem 0 0 .3rem;',
        border: '.1rem solid #bdbdbd;',
        fontSize: '1.4rem',
        fontFamily: 'Vazir',
        flex: 1,
    },
});

export default Main;
