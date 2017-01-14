import { GameAction, GameActions, OtherAction } from '../actions';

import { Game } from '../models';

const DEFAULT_STATE: Game = {
    word: '',
    wordProvider: -1,
    guesses: []
};

const { CREATE, GUESS } = GameActions.Type;

export const game = (state: Game = DEFAULT_STATE, action: GameAction | OtherAction): Game => {
    switch (action.type) {
        case CREATE:
            return Object.assign({}, action.payload, {
                guesses: []
            });
        case GUESS:
            return Object.assign({}, state, {
                guesses: [
                    ...state.guesses,
                    action.payload.guess
                ]
            });
        default:
            return  state;
    }
};