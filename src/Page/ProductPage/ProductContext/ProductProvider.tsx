// import { CircularProgress } from '@material-ui/core';
import LoadingSpinner from '../../../Loading/LoadingSpinner';
import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IproductPage } from '../api/api_interface';
import { getProduct } from '../api/postApi';

const ProductContext = createContext<{
    pageData: IproductPage;
    getPageData: Function;
}>({
    pageData: {},
    getPageData: () => {},
});

export const useProductContext = () => useContext(ProductContext);

const ProductProvider: React.FunctionComponent<{ children: ReactNode }> = ({
    children,
}) => {
    const [pageData, getPageData] = useState<IproductPage>({});
    const history = useHistory();
    const { token } = useParams<{ token: string }>();
    const [loading, setLoading] = useState(true);

    const fetchProduct = useCallback(async () => {
        //@ts-ignore
        const res = await getProduct({ token });
        if (res.success) {
            //@ts-ignore
            getPageData(res.productData);
        }
        if (res.message === '404') {
            history.push('/404');
        }
        setLoading(false);
    }, [history, token]);

    useEffect(() => {
        fetchProduct();
    }, [token]);
    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <ProductContext.Provider value={{ pageData, getPageData }}>
            {children}
        </ProductContext.Provider>
    );
};
export default ProductProvider;
