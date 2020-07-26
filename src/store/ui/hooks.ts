import {changeSwitchNavigationRouteAction} from './action';
import {useDispatch} from 'react-redux';


export function useSwitchNavigation() {
    const dispatch = useDispatch();
    return {navigate: (name: string) => dispatch(changeSwitchNavigationRouteAction(name))};
}
