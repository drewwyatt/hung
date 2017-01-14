import { combineReducers } from 'redux';
import { game } from './game.reducer';
import { players } from './players.reducer';

const rootReducer = combineReducers({
    game,
    players
});

export default rootReducer;