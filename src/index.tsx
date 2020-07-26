import React, {memo} from 'react';
import {Provider, useSelector} from 'react-redux';
import {IndicatorView} from './components/IndicatorView';
import {store} from './store';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ApplicationNavigator} from './navigators/ApplicationNavigator';
import {GlobalState} from './store/state';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'rgb(255,255,255)',
    },
};

const ApplicationView = memo(function ApplicationView() {

    const busy = useSelector(
        (state: GlobalState) => state.ui.busy,
    );


    return (
        <IndicatorView busy={busy}>
            <StatusBar barStyle='light-content'/>
            <NavigationContainer theme={theme}>
                <ApplicationNavigator/>
            </NavigationContainer>
        </IndicatorView>
    );
});


export const App = memo(function App() {
    return (
        <Provider store={store}>
            <ApplicationView/>
        </Provider>
    );
});
