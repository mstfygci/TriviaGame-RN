import {Difficulty} from '../store/game/state';

export interface QuestionModel {
    id: number;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    difficulty: Difficulty;
}
