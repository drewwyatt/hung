import { Game, Letter } from '../models';

import { Action } from 'redux';

export type GameAction = 
    GameActions.GameCreateAction |
    GameActions.GameGuessAction;

export namespace GameActions {
    export const Type = {
        CREATE: 'GAME/CREATE' as 'GAME/CREATE',
        GUESS: 'GAME/GUESS' as 'GAME/GUESS'
    };

    /*******/

    export interface GameCreateAction extends Action {
        type: 'GAME/CREATE';
        payload: {
            word: string;
            wordProvider: number;
        };
    }

    export const create = (word: string, wordProvider: number): GameCreateAction => ({ 
        type: Type.CREATE,
        payload: { word, wordProvider }
    });

    /*******/

    export interface GameGuessAction extends Action {
        type: 'GAME/GUESS';
        payload: {
            guess: Letter;
        };
    }

    export const guess = (guess: Letter): GameGuessAction => ({
        type: Type.GUESS,
        payload: { guess }
    });
}