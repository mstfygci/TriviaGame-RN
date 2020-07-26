import {createAction} from 'deox';
import {QuestionModel} from '../../models/question.model';
import {CategoryModel} from '../../models/category.model';
import {LeaderboardItemModel} from '../../models/leaderboard-item.model';
import {Difficulty} from './state';

export const setCategoryListAction = createAction(
    'SET_CATEGORY_LIST',
    resolve => ((categoryList: CategoryModel[]) => resolve({categoryList})));

export const setQuestionListAction = createAction(
    'SET_QUESTION_LIST',
    resolve => (questionList: QuestionModel[]) => resolve({questionList}),
);
export const setSelectedChoiceAction = createAction(
    'SET_SELECTED_CATEGORY',
    resolve => (selectedCategory: CategoryModel, selectedDifficulty: Difficulty) => resolve({
        selectedCategory,
        selectedDifficulty,
    }),
);

export const correctAnswerAction = createAction(
    'CORRECT_ANSWER',
    resolve => ((point: number, timeSpend: number) => resolve({point, timeSpend})));

export const incorrectAnswerAction = createAction(
    'INCORRECT_ANSWER',
);

export const nextQuestionAction = createAction(
    'NEXT_QUESTION_ANSWER',
);

export const addLeaderboardAction = createAction(
    'ADD_LEADERBOARD',
    resolve => ((leaderboardItem: LeaderboardItemModel) => resolve({leaderboardItem})),
);
export const setLeaderboardAction = createAction(
    'SET_LEADERBOARD',
    resolve => ((leaderboard: LeaderboardItemModel[]) => resolve({leaderboard})),
);

export const setJokerUsedAction = createAction(
    'SET_JOKER_USED',
    resolve => (used: boolean) => resolve({used}),
);

