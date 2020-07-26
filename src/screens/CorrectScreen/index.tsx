import React, {memo, useCallback} from 'react';
import {Image, KeyboardAvoidingView, Platform, SafeAreaView, Text, View} from 'react-native';
import {Styles} from './style';
import {renderIf} from '../../utils/renderIf';
import {useNavigation} from '@react-navigation/native';
import {ButtonComponent} from '../../components/ButtonComponent';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../../store/state';
import {incorrectAnswerAction, nextQuestionAction} from '../../store/game/action';

export const CorrectScreen = memo(function CorrectScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const currentQuestionIndex = useSelector((state: GlobalState) => state.game.currentQuestionIndex);
    const totalPoint = useSelector((state: GlobalState) => state.game.totalPoint);
    const earnedPoint = useSelector((state: GlobalState) => state.game.earnedPoint);
    const questionList = useSelector((state: GlobalState) => state.game.questionList);

    const moveToNextQuestion = useCallback(() => {
        dispatch(nextQuestionAction());
        navigation.reset({
            index: 0,
            routes: [{name: 'Question'}],
        });
    }, [dispatch, navigation]);

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
                            {currentQuestionIndex + 1}/{questionList.length}
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
                    <View style={Styles.successIconArea}>
                        <Image style={Styles.successIcon}
                               source={require('./images/success.png')}/>
                    </View>
                    <View style={Styles.statusTextArea}>
                        <Text style={Styles.statusText}>
                            Correct
                        </Text>
                    </View>
                    <View style={Styles.infoTextArea}>
                        <Text style={Styles.infoText}>
                            You have earned {earnedPoint} points
                        </Text>
                        <Text style={Styles.infoText}>
                            Total: {totalPoint} points
                        </Text>
                    </View>
                    {
                        renderIf(currentQuestionIndex + 1 < questionList.length)(
                            () => (
                                <ButtonComponent
                                    text={'Next Question'}
                                    onPress={moveToNextQuestion}/>
                            ),
                            () => (
                                <ButtonComponent
                                    text={'Main Menu'}
                                    onPress={moveToMain}/>
                            ),
                        )
                    }
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
});
