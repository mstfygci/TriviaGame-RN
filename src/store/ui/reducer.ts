import {UIState} from './state';
import {createReducer} from 'deox';
import {changeBusyAction, changeSwitchNavigationRouteAction} from './action';

const initialState: UIState = {
    busy: false,
    busyCount: 0,
    switchNavigationRoute: 'Splash',
};

export const uiReducer = createReducer(
    initialState,
    handle => [
        handle(changeBusyAction, (state, action) => {
            let busyCount = state.busyCount + (action.payload.busy ? 1 : -1);
            if (busyCount < 0) {
                busyCount = 0;
            }

            return {
                ...state,
                busyCount,
                busy: busyCount > 0,
            };
        }),
        handle(changeSwitchNavigationRouteAction, (state, action) => {
            return {
                ...state,
                switchNavigationRoute: action.payload.route,
            };
        }),

    ],
);
