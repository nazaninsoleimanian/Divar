import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CityBox from './components/city/CityBox';
import DivarProvider from './data/DivarProvider';
import Layout from './Layout/Layout';
import Main from './Main/Main';
import SelectCity from './components/city/SelectCity';
import { Box, Modal } from '@material-ui/core';
import FirstPage from './FirstPage';

ReactDOM.render(
    //     <CityBox />
    <React.StrictMode>
        <DivarProvider>
            <FirstPage />
        </DivarProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
