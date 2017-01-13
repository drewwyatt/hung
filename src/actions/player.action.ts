import { Action } from 'redux';
import { Player } from '../models';

export type PlayerAction = 
    PlayerActions.CreatePlayerAction;

export namespace PlayerActions {
    export const Type = {
        CREATE: 'PLAYER/CREATE' as 'PLAYER/CREATE'
    };

    /*****/

    export interface CreatePlayerAction extends Action {
        type: 'PLAYER/CREATE';
        payload: {
            name: string;
        };
    }

    export const create = (name: string): CreatePlayerAction => ({ type: Type.CREATE, payload: { name } });
}
