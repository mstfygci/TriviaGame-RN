import {createReducer} from 'deox';
import {
    correctAnswerAction,
    incorrectAnswerAction,
    nextQuestionAction,
    setCategoryListAction, addLeaderboardAction,
    setQuestionListAction, setSelectedChoiceAction, setLeaderboardAction, setJokerUsedAction,
} from './action';
import {GameState} from './state';
import {Alert} from 'react-native';
import {Storage} from '../../utils/storage';

const initialState: GameState = {
    categoryList: [],
    questionList: [],
    currentQuestionIndex: 0,
    earnedPoint: 0,
    totalPoint: 0,
    totalTimeSpent: 0,
    leaderBoard: [],
    selectedCategory: null,
    selectedDifficulty: null,
    jokerUsed: false,
};

export const gameReducer = createReducer(
    initialState,
    handle => [
        handle(incorrectAnswerAction, state => {
            return {
                ...state,
                totalPoint: 0,
                currentQuestionIndex: 0,
            };
        }),
        handle(setCategoryListAction, (state, action) => {
            return {
                ...state,
                categoryList: action.payload.categoryList,
            };
        }),
        handle(setSelectedChoiceAction, (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload.selectedCategory,
                selectedDifficulty: action.payload.selectedDifficulty,
            };
        }),
        handle(setQuestionListAction, (state, action) => {
            return {
                ...state,
                questionList: action.payload.questionList,
            };
        }),
        handle(correctAnswerAction, (state, action) => {

            return {
                ...state,
                earnedPoint: action.payload.point,
                totalPoint: state.totalPoint + action.payload.point,
                totalTimeSpent: state.totalTimeSpent + action.payload.timeSpend,
            };
        }),
        handle(nextQuestionAction, (state) => {
            let index = state.currentQuestionIndex;
            if (index < state.questionList.length - 1) {
                index++;
            }
            return {
                ...state,
                currentQuestionIndex: index,
            };
        }),
        handle(addLeaderboardAction, (state, action) => {

            let newList = state.leaderBoard;
            newList.push(action.payload.leaderboardItem);
            newList.sort((a, b) => b.score - a.score);

            Storage.setLeaderboard(newList).then(() => {
                // Alert.alert('Ağlama değmez Hayat', `${state.questionList[state.currentQuestionIndex].correct_answer}`);

            }).catch(() => {
                Alert.alert('Something went wrong!', 'Score couldn\'t be saved in device memory');
            });

            return {
                ...state,
                leaderBoard: newList,
            };
        }),
        handle(setLeaderboardAction, (state, action) => {

            return {
                ...state,
                leaderBoard: action.payload.leaderboard,
            };
        }),
        handle(setJokerUsedAction, (state, action) => {
            return {
                ...state,
                jokerUsed: action.payload.used,
            };
        }),

    ],
);
