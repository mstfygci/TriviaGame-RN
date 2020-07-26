import AsyncStorage from '@react-native-community/async-storage';
import {LeaderboardItemModel} from '../models/leaderboard-item.model';

export class Storage {
    static readonly leaderboard = 'leaderboard';

    private static get<T>(key: string): Promise<T> {
        return AsyncStorage.getItem(key).then(item => JSON.parse(item)).catch(() => null);
    }

    private static set<T>(key: string, value: T) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    private static remove<T>(key: string) {
        return AsyncStorage.removeItem(key);
    }

    static getLeaderboard() {
        return Storage.get<LeaderboardItemModel[]>(Storage.leaderboard);
    }

    static setLeaderboard(leaderboardItem: LeaderboardItemModel[]) {
        return Storage.set(Storage.leaderboard, leaderboardItem);
    }

    static removeLeaderboard() {
        return Storage.remove(Storage.leaderboard);
    }
}
