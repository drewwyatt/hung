import { combineReducers } from 'redux';
import { players } from './players.reducer';

const rootReducer = combineReducers({
    players
});

export default rootReducer;