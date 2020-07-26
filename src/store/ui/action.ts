import {createAction} from 'deox';

export const changeBusyAction = createAction(
    'CHANGE_BUSY',
    resolve => (busy: boolean) =>
        resolve({busy}),
);

export const changeSwitchNavigationRouteAction = createAction(
    'CHANGE_SWITCH_NAVIGATION_ROUTE',
    resolve => (route: string) => resolve({route}),
);
