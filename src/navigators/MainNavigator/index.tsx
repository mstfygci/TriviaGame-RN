import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../../screens/MainScreen';
import {QuestionScreen} from '../../screens/QuestionScreen';
import {CorrectScreen} from '../../screens/CorrectScreen';
import {IncorrectScreen} from '../../screens/IncorrectScreen';
import {TimeoutScreen} from '../../screens/TimeoutScreen';
import {WinnerScreen} from '../../screens/WinnerScreen';
import {LeaderBoardScreen} from '../../screens/LeaderBoardScreen';

const Stack = createStackNavigator();

export const MainNavigator = memo(function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Main' component={MainScreen}/>
            <Stack.Screen name='Question' component={QuestionScreen}/>
            <Stack.Screen name='Wrong' component={IncorrectScreen}/>
            <Stack.Screen name='Correct' component={CorrectScreen}/>
            <Stack.Screen name='Timeout' component={TimeoutScreen}/>
            <Stack.Screen name='Winner' component={WinnerScreen}/>
            <Stack.Screen name='LeaderBoard' component={LeaderBoardScreen}/>
        </Stack.Navigator>
    );
});
