import React from 'react';
import ReactDom from 'react-dom';
import Tracker from './Tracker';
import {GlobalProvider} from '../src/context/GlobalState';  

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GlobalProvider>
        <Tracker />
        </GlobalProvider>
    </React.StrictMode>
)