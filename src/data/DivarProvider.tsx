import { FunctionComponent, ReactNode, useReducer } from 'react';
import { getCookie, setCookie } from './cookie';
import DivarReducer from './divarReducer';
import preLoad from './preLoadData';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IDivarState } from './interfaces';
import { DivarContext } from './DivarContext';

const stateInitializer: (initState: IDivarState) => IDivarState = (initState) => {
    const cityCookie = getCookie('city');

    const city = cityCookie ? JSON.parse(cityCookie) : null;
    if (city)
        return {
            data: preLoad,
            city,
            isSelectingCity: false,
            route: '',
        };
    return initState;
};

const DivarProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(
        DivarReducer,
        {
            data: preLoad,
            city: [],
            isSelectingCity: true,
            route: '',
        },
        stateInitializer,
    );
    // const location = useLocation<ILocationState>();
    // const pathArray = location.pathname.split('/');

    useEffect(() => {
        setCookie('city', JSON.stringify(state.city), 10);
    }, [state.city]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetchAdv({ city: state.city[2] });
    //         if (res.success)
    //             dispatch({
    //                 type: DivarReducerActionTypes.SetAds,
    //                 payload: { ads: res.data },
    //             });
    //     };
    //     dispatch({
    //         type: DivarReducerActionTypes.ChangeLoading,
    //         payload: { loading: true },
    //     });
    //     fetchData();
    // }, [state.city]);

    return (
        <DivarContext.Provider value={{ state, dispatch }}>
            <Router>{children}</Router>
        </DivarContext.Provider>
    );
};

export default DivarProvider;
function usePathname(usePathname: any) {
    throw new Error('Function not implemented.');
}
