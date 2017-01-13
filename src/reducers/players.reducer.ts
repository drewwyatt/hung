import { OtherAction, PlayerAction, PlayerActions } from '../actions';
import { Player, Role } from '../models';

export type PlayersState = Player[];

const { CREATE } = PlayerActions.Type;
export const players = (state: PlayersState = [], action: PlayerAction | OtherAction): PlayersState => {
    switch (action.type) {
        case CREATE:
            return createPlayer(state, action);
        default:
            return state;
    }
};

const createPlayer = (state: PlayersState, action: PlayerActions.CreatePlayerAction): PlayersState => {
    const role = (state.findIndex(p => p.role === Role.PROVIDER) === -1) ? Role.PROVIDER : Role.GUESSER;
    return [
        ...state,
        {
            id: state.length + 1,
            name: action.payload.name,
            role,
            score: 0
        }
    ];
};