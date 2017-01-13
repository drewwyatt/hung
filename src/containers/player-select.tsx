import * as React from 'react';

import { Player } from '../models';
import { PlayerActions } from '../actions';
import { connect } from 'react-redux';

type Props = PropsFromState & PropsFromDispatch;
class PlayerSelect extends React.Component<Props, void> {
    render(): JSX.Element {
        const { players } = this.props;
        return (
            <section>
                <h1>Player Selection</h1>
                <p>{players.map(p => p.name).join(', ')}</p>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <input type='text' ref={e => this._playerName = e} />
                    <button type='submit'>Join</button>
                </form>
            </section>
        );
    }

    private _playerName: HTMLInputElement;

    private _handleSubmit(e: Event): void {
        e.preventDefault();
        this.props.createPlayer(this._playerName.value);
        this._playerName.value = '';
    }

}

interface PropsFromState {
    players: Player[];
}

const mapStateToProps = (state: any): PropsFromState => ({
    players: state.players
});

interface PropsFromDispatch {
    createPlayer(name: string): void;
}

const mapDispatchToProps = (dispatch: any): PropsFromDispatch => ({
    createPlayer: name => dispatch(PlayerActions.create(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelect);