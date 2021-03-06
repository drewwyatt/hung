import * as React from 'react';

import GameBoard from './game-board';
import { Player } from '../models';
import PlayerSelect from './player-select';
import { connect } from 'react-redux';

class App extends React.Component<AppProps, void> {
    render(): JSX.Element {
        return (
            <section>
                {this._getRoute()}
            </section>
        );
    }

    private _getRoute(): JSX.Element {
        const { players } = this.props;
        if (!players || players.length < 2) {
            return <PlayerSelect />;
        }

        return <GameBoard />;
    }
}

interface AppProps {
    players: Player[];
}

const mapStateToProps = (state: any): AppProps => ({
    players: state.players
});

export default connect(mapStateToProps)(App);