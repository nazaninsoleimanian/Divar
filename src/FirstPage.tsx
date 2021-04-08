import { useDivarContext } from './data/DivarContext';

import Home from './Page/Home';
import Layout from './Layout/Layout';
import CityModal from './components/city/CityModal';
import ProductPage from './Page/ProductPage/ProductPage';
import ProductProvider from './Page/ProductPage/ProductContext/ProductProvider';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const FirstPage = () => {
    const { state } = useDivarContext();

    return (
        <>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/v/Product/:token">
                            <ProductProvider>
                                <ProductPage />
                            </ProductProvider>
                        </Route>
                        <Route
                            path="/404"
                            render={() => <Redirect to={`/s/${state.city[2]}`} />}
                        ></Route>
                        <Route path="/s/:city/:category" component={Home} />
                        <Route
                            exact
                            path="/s/:city"
                            component={Home}
                            // render={() => <Redirect to={`/s/${state.city[2]}`} />}
                        />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Layout>

                {(!state.city.length || state.isSelectingCity) && <CityModal />}
            </Router>
        </>
    );
};

export default FirstPage;
