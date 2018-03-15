import React from 'react';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'

import AppWithNavigationState from './AppNavigator'
import {middleware} from "./utils/redux";
import AppReducers from './reducers/index'

const store = createStore(AppReducers,applyMiddleware(middleware))

export  default class ReduxExampleApp extends React.Component {

    render(){
        return(
            <Provider store = {store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }

}

