import * as React from 'react';

import {Game, Player} from '../models';

import { GameActions } from '../actions';
import {connect} from 'react-redux';

type Props = PropsFromState & PropsFromDispatch;
class GameBoard extends React.Component<Props, void> {
    componentDidMount(): void {
        const { game, createGame, players } = this.props;
        if (!game.word.trim()) {
            createGame('POOP', players[0].id);
        }
    }

    render(): JSX.Element {
        return (
            <section>
                <h1>This is the game board</h1>
            </section>
        );
    }
}

interface PropsFromState  {game: Game, players: Player[]}

const mapStateToProps = (state: any) =>
    ({game: state.game, players: state.players});

interface PropsFromDispatch {
    createGame(word: string, provider: number): void;
}

const mapDispatchToProps = (dispatch: any): PropsFromDispatch => ({
    createGame: (word: string, provider: number) => dispatch(GameActions.create(word, provider))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)
