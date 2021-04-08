import preLoad from './preLoadData';

export interface IAdvertise {
    data: {
        category: string;
        description: any;
        has_chat: any;
        image: any;
        web_image: any;
        normal_text: any;
        red_text: any;
        title: any;
        token: any;
    };
    category?: string;
    city?: string;
    description?: string;
    district?: string;
    has_chat?: boolean;
    image?: string;
    image_overlay_tag?: null;
    image_top_left_tag?: null;
    index?: number;
    normal_text?: string;
    red_text?: string;
    title?: string;
    token?: string;
    web_image?: [{ src: string; type: string }];
}

export interface IDivarState {
    // loading: boolean;
    // advertise: IAdvertise[];
    pathname?: string;
    category?: string;
    data: typeof preLoad;
    city: any[];
    isSelectingCity: boolean;
    route: string;
}

export interface ISuggestion {
    displayed_text: string;
    value: {
        category: {
            value: string;
        };
    };
}

export interface IApiMessage {
    success: boolean;
    data?: any;
    message?: string;
    hasMore?: boolean;
    suggestionList?: ISuggestion[];
}

export interface ILocationState {
    from: {
        pathname: string;
    };
}
