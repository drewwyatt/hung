import * as React from 'react';

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

        return (
            <h1>This is an unhandled view state...</h1>
        );
    }
}

interface AppProps {
    players: Player[];
}

const mapStateToProps = (state: any): AppProps => ({
    players: state.players
});

export default connect(mapStateToProps)(App);