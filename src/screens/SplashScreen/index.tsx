import {Styles} from './style';
import {View, Text, Alert} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useSwitchNavigation} from '../../store/ui/hooks';
import {getCategoryApi} from '../../api/request';
import {useDispatch} from 'react-redux';
import {setCategoryListAction, setLeaderboardAction} from '../../store/game/action';
import {Storage} from '../../utils/storage';

const DELAY_SECONDS = 2;

export const SplashScreen = memo(function SplashScreen() {


    const navigation = useSwitchNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        getCategoryApi().then(response => {
            dispatch(setCategoryListAction(response));
        }).catch((e) => {
            if (e) {
                console.log({e});
            }
            Alert.alert('Sorry !', 'Something went wrong. Please Check network');
        });
        Storage.getLeaderboard().then(
            response => {
                if (response != null) {
                    dispatch(setLeaderboardAction(response));
                }
            },
        );
        setTimeout(() => navigation.navigate('Main'), DELAY_SECONDS * 1000);
    }, [dispatch, navigation]);

    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>
                Splash Screen
            </Text>
        </View>
    );
});

