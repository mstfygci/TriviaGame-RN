import {MainNavigator} from '../MainNavigator';
import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {SplashScreen} from '../../screens/SplashScreen';
import {renderIf} from '../../utils/renderIf';

const Stack = createStackNavigator();

export const ApplicationNavigator = memo(function ApplicationNavigator() {
    const route = useSelector(state => state.ui.switchNavigationRoute);

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {
                renderIf(route === 'Splash')(() => (
                    <Stack.Screen name='Splash' component={SplashScreen}/>
                ))
            }
            {
                renderIf(route === 'Main')(() => (
                    <Stack.Screen name='Main' component={MainNavigator}/>
                ))
            }
        </Stack.Navigator>
    );
});
