import {combineReducers, createStore} from 'redux';
import {uiReducer} from './ui/reducer';
import {gameReducer} from './game/reducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    game: gameReducer,
});

export const store = createStore(
    rootReducer,
);

