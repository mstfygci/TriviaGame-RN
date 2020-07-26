import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {AppState, KeyboardAvoidingView, Platform, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import {ChoiceComponent} from '../../components/ChoiceComponent';
import {renderIf} from '../../utils/renderIf';
import {useNavigation} from '@react-navigation/native';
import {ChooseModel} from '../../models/choose.model';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../../store/state';
import {correctAnswerAction, addLeaderboardAction, setJokerUsedAction} from '../../store/game/action';
import {useInterval} from '../../hooks/interval';

const initialMaxPoint = 100;
const mediumMaxPoint = 150;
const hardMaxPoint = 200;
const initialMinPoint = 15;
const mediumMinPoint = 20;
const hardMinPoint = 30;
const timerStart = 15;

export const QuestionScreen = memo(function QuestionScreen() {


    const navigation = useNavigation();
    const dispatch = useDispatch();
    const appState = useRef(AppState.currentState);

    const [maxPoint, setMaxPoint] = useState<number>(initialMaxPoint);
    const [minPoint, setMinPoint] = useState<number>(initialMinPoint);

    const [timerCount, setTimerCount] = useState<number>(timerStart);
    const [timeout, setTimeout] = useState<number>(1000);

    const totalTimeSpent = useSelector((state: GlobalState) => state.game.totalTimeSpent);
    const selectedCategory = useSelector((state: GlobalState) => state.game.selectedCategory);
    const selectedDifficulty = useSelector((state: GlobalState) => state.game.selectedDifficulty);

    const questionList = useSelector((state: GlobalState) => state.game.questionList);
    const currentQuestionIndex = useSelector((state: GlobalState) => state.game.currentQuestionIndex);
    const totalPoint = useSelector((state: GlobalState) => state.game.totalPoint);
    const [jokerUsed, setJokerUsed] = useState(false);
    const jokerUsedBefore = useSelector(state => state.game.jokerUsed);
    const currentQuestion = useMemo(
        () => questionList[currentQuestionIndex],
        [currentQuestionIndex, questionList],
    );

    const jokerPressed = useCallback(() => {
        setJokerUsed(true);
        dispatch(setJokerUsedAction(true));
    }, [dispatch]);

    useInterval(() => {
        if (timerCount === 0) {
            setTimeout(null);
            navigation.reset({
                index: 0,
                routes: [{name: 'Timeout'}],
            });
        } else {
            setTimerCount(timerCount - 1);
        }
    }, timeout);

    useEffect(() => {

        if (currentQuestion.difficulty === 'medium') {
            setMinPoint(mediumMinPoint);
            setMaxPoint(mediumMaxPoint);
        } else if (currentQuestion.difficulty === 'hard') {
            setMinPoint(hardMinPoint);
            setMaxPoint(hardMaxPoint);
        }
    }, [currentQuestion]);

    const chooseListRaw: ChooseModel[] = useMemo(() => {
        const arr = currentQuestion.incorrect_answers.map(r => ({
            text: r,
            disabled: false,
            correct: false,
        }));
        arr.push({text: currentQuestion.correct_answer, disabled: false, correct: true});
        arr.sort(() => Math.random() - 0.5);

        return arr;
    }, [currentQuestion]);

    const chooseList: ChooseModel[] = useMemo(() => {
            const incorrectIndices: number[] = [];
            for (let index = 0; index < chooseListRaw.length; index++) {
                if (!chooseListRaw[index].correct) {
                    incorrectIndices.push(index);
                }
            }

            const chooseToStay = Math.floor(Math.random() * 3);
            return chooseListRaw.map((c, i) => ({
                ...c,
                disabled: c.correct ? false : (!jokerUsed ? false : i !== incorrectIndices[chooseToStay]),
            }));
        },
        [chooseListRaw, jokerUsed]);

    const endGame = useCallback((isWon: boolean) => {
        if (totalPoint > 0) {
            dispatch(addLeaderboardAction({
                score: totalPoint,
                difficult: selectedDifficulty,
                category: selectedCategory ? selectedCategory.name : null,
                totalTimeSpend: totalTimeSpent,
            }));
        }

        navigation.reset({
            index: 0,
            routes: [{name: isWon ? 'Winner' : 'Wrong'}],
        });
    }, [dispatch, navigation, selectedCategory, selectedDifficulty, totalPoint, totalTimeSpent]);

    const calculatePoint = useCallback((): number =>
            Number(((((maxPoint - minPoint) / timerStart) * timerCount) + minPoint).toFixed(0)),
        [maxPoint, minPoint, timerCount],
    );

    const answerCorrect = useCallback(() => {
        const point = calculatePoint();
        const timeSpent = timerStart - timerCount;
        dispatch(correctAnswerAction(point, timeSpent));

        if (currentQuestionIndex === questionList.length - 1) {
            endGame(true);
        } else {
            navigation.reset({
                index: 0,
                routes: [{name: 'Correct'}],
            });
        }

    }, [calculatePoint, currentQuestionIndex, dispatch, endGame, navigation, questionList.length, timerCount]);

    const selectedAnswer = useCallback((correct: boolean) => {
        if (correct) {
            answerCorrect();
        } else {
            endGame(false);
        }
    }, [answerCorrect, endGame]);


    const handleAppStateChange = useCallback((nextAppState: any) => {
        if (
            appState.current.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            endGame(false);
        }

        appState.current = nextAppState;
    }, [endGame]);

    useEffect(() => {
        AppState.addEventListener('change', handleAppStateChange);

        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, [handleAppStateChange]);


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
                        {
                            renderIf(currentQuestion != null)(() => (
                                <Text style={Styles.headerQuestionText}>
                                    {currentQuestionIndex + 1}/{questionList.length}
                                </Text>
                            ))
                        }
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
                        <Text style={Styles.headerTimerTitle}>
                            Remaining Time
                        </Text>
                        <Text style={Styles.headerTimerText}>
                            {timerCount}
                        </Text>
                    </View>

                </View>
                {
                    renderIf(!jokerUsedBefore)(() =>
                        <TouchableOpacity
                            style={Styles.jokerButton}
                            onPress={jokerPressed}>
                            <Text style={Styles.jokerButtonText}>
                                50%
                            </Text>
                        </TouchableOpacity>,
                    )
                }
                <View style={Styles.container}>
                    <View style={Styles.questionTextArea}>
                        {renderIf(currentQuestion != null)(() => (
                            <Text style={Styles.questionText}>
                                {currentQuestion.question}
                            </Text>
                        ))}
                    </View>
                    <View style={Styles.chooseContainer}>
                        {
                            chooseList.map((item) => {
                                return (
                                    <ChoiceComponent
                                        key={item.text}
                                        text={item.text}
                                        disabled={item.disabled}
                                        selectedAnswer={() => selectedAnswer(item.correct)}
                                    />
                                );
                            })
                        }
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
});
