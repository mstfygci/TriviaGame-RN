import React, {memo, useCallback} from 'react';
import {Image, KeyboardAvoidingView, Platform, SafeAreaView, Text, View} from 'react-native';
import {Styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {ButtonComponent} from '../../components/ButtonComponent';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../../store/state';
import {incorrectAnswerAction} from '../../store/game/action';


export const IncorrectScreen = memo(function IncorrectScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();


    const currentQuestionIndex = useSelector((state: GlobalState) => state.game.currentQuestionIndex);
    const totalPoint = useSelector((state: GlobalState) => state.game.totalPoint);
    const questionList = useSelector((state: GlobalState) => state.game.questionList);


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
                <View style={Styles.headerContainer}>
                    <View style={Styles.headerQuestionArea}>
                        <Text style={Styles.headerQuestionTitle}>
                            Question
                        </Text>
                        <Text style={Styles.headerQuestionText}>
                            {currentQuestionIndex + 1} / {questionList.length}
                        </Text>
                    </View>
                    <View style={Styles.headerPointArea}>
                        <Text style={Styles.headerPointTitle}>
                            Points
                        </Text>
                        <Text style={Styles.headerPointText}>
                            {totalPoint}
                        </Text>
                    </View>
                    <View style={Styles.headerTimerArea}>
                    </View>
                </View>
                <View style={Styles.container}>
                    <Image style={Styles.wrongIcon}
                           source={require('./images/wrong.png')}/>
                    <View style={Styles.statusTextArea}>
                        <Text style={Styles.statusText}>
                            Wrong
                        </Text>
                    </View>
                    <View style={Styles.infoTextArea}>
                        <Text style={Styles.infoText}>
                            {questionList[currentQuestionIndex].correct_answer}{'\n'}You failed
                        </Text>
                        <Text style={Styles.infoText}>
                            Total: {totalPoint} points
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
