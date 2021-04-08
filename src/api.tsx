import { IApiMessage } from './data/interfaces';

export interface IAPIprops {
    city: any[];
    pathname?: string;
    query?: string;
    payload?: {};
    page?: number;
}
export const fetchAdv = async ({
    city,
    pathname,
    query,
    payload,
    page,
}: IAPIprops): Promise<IApiMessage> => {
    try {
        const url =
            `https://api.divar.ir/v8/web-search/${city[2]}` +
            (pathname ? `/${pathname}` : '') +
            (page !== 0 || query !== '' ? '?' : '') +
            (query ? `q=${query}` : '') +
            (page !== 0 && query ? '&' : '') +
            (page !== 0 ? `page=${page}` : '');
        const response = await fetch(url);
        if (response.status === 404) return { success: false, message: '404' };
        const adv = await response.json();
        const hasMore = adv.last_post_date - adv.first_post_date === 0 ? false : true;
        return {
            success: true,
            data: adv.widget_list,
            hasMore,
            suggestionList: adv.suggestion_list,
        };
    } catch (error) {
        return { success: false, message: error };
    }
};
