import {UIState} from './ui/state';
import {GameState} from './game/state';

export interface GlobalState {
    ui: UIState;
    game: GameState;
}
