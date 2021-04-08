import { createContext, Dispatch, useContext } from 'react';
import { DivarReducerActions } from './divarReducer';
import { IDivarState } from './interfaces';
import preLoad from './preLoadData';

interface IContextProps {
    state: IDivarState;
    dispatch: Dispatch<DivarReducerActions>;
}

export const DivarContext = createContext<IContextProps>({
    state: {
        data: preLoad,
        city: [],
        isSelectingCity: false,
        route: '',
    },
    dispatch: () => {},
});

export const useDivarContext = () => useContext(DivarContext);
