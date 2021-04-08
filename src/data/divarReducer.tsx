import { IAdvertise, IDivarState } from './interfaces';
import preLoad from './preLoadData';

export enum DivarReducerActionTypes {
    GetData,
    ChangeCity,
    ToggleSelectCityVisible,
    GetRoute,
}

export interface IGetReducerDataAction {
    type: DivarReducerActionTypes.GetData;
}

export interface IToggleSelectCityVisibleAction {
    type: DivarReducerActionTypes.ToggleSelectCityVisible;
}

export interface IChangeCityAction {
    type: DivarReducerActionTypes.ChangeCity;
    payload: {
        city: any;
    };
}
export interface IGetRouteAction {
    type: DivarReducerActionTypes.GetRoute;
    payload: {
        city: any;
        slug: string;
    };
}

// export interface ISetAdsAction {
//     type: DivarReducerActionTypes.SetAds;
//     payload: {
//         ads: IAdvertise[];
//     };
// }

// export interface IChangeLoadingAction {
//     type: DivarReducerActionTypes.ChangeLoading;
//     payload: {
//         loading: boolean;
//     };
// }

export type DivarReducerActions =
    | IGetReducerDataAction
    | IChangeCityAction
    | IToggleSelectCityVisibleAction
    | IGetRouteAction;

const DivarReducer = (state: IDivarState, action: DivarReducerActions) => {
    switch (action.type) {
        case DivarReducerActionTypes.GetData:
            return state;
        case DivarReducerActionTypes.ChangeCity:
            return {
                ...state,
                city: action.payload.city,
                isSelectingCity: false,
            };

        case DivarReducerActionTypes.ToggleSelectCityVisible:
            return { ...state, isSelectingCity: !state.isSelectingCity };
        case DivarReducerActionTypes.GetRoute:
            return { ...state, city: action.payload.city, slug: action.payload.slug };
    }
};
export default DivarReducer;
