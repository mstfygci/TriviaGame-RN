import {Difficulty} from '../store/game/state';


export interface LeaderboardItemModel {
    score: number;
    difficult: Difficulty;
    category: string;
    totalTimeSpend: number;
}
