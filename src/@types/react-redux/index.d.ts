import {GlobalState} from '../../store/state';

declare module 'react-redux' {
    interface DefaultRootState extends GlobalState {
    }
}
