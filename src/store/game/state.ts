import {QuestionModel} from '../../models/question.model';
import {CategoryModel} from '../../models/category.model';
import {LeaderboardItemModel} from '../../models/leaderboard-item.model';

export type Difficulty = 'easy' | 'medium' | 'hard' | null;

export interface GameState {
    categoryList: CategoryModel[];
    selectedCategory: CategoryModel;
    selectedDifficulty: Difficulty;
    questionList: QuestionModel[];
    currentQuestionIndex: number;
    earnedPoint: number;
    totalPoint: number;
    totalTimeSpent: number;
    leaderBoard: LeaderboardItemModel[];
    jokerUsed: boolean;
}
