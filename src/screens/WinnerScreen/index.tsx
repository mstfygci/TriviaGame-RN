import React, {memo, useCallback} from 'react';
import {Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, Text, View} from 'react-native';
import {Styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {ButtonComponent} from '../../components/ButtonComponent';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../../store/state';
import {incorrectAnswerAction} from '../../store/game/action';


export const WinnerScreen = memo(function WinnerScreen() {


    const navigation = useNavigation();
    const dispatch = useDispatch();

    const totalPoint = useSelector((state: GlobalState) => state.game.totalPoint);
    const totalTimeSpent = useSelector((state: GlobalState) => state.game.totalTimeSpent);

    const moveToMain = useCallback(() => {
        dispatch(incorrectAnswerAction());
        navigation.navigate('Main');
    }, [dispatch, navigation]);

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.select<'height' | 'position' | 'padding'>({
                android: undefined,
                ios: 'padding',
            })}>
            <SafeAreaView
                style={Styles.contentContainer}>
                <View style={Styles.container}>
                    <ImageBackground
                        style={Styles.iconBackground}
                        source={require('./images/badge.png')}>
                        <Image style={Styles.icon}
                               source={require('./images/winner_cup.png')}/>
                    </ImageBackground>
                    <View style={Styles.statusTextArea}>
                        <Text style={Styles.statusText}>
                            You Win !
                        </Text>
                    </View>
                    <View style={Styles.infoTextArea}>
                        <Text style={Styles.infoText}>
                            Total: {totalPoint} points
                        </Text>
                        <Text style={Styles.infoText}>
                            Total Time Spend: {totalTimeSpent} seconds
                        </Text>
                    </View>

                    <ButtonComponent
                        text={'Main Menu'}
                        onPress={moveToMain}/>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
});
