import * as React from 'react';

class PlayerSelect extends React.Component<void, void> {
    render(): JSX.Element {
        return (
            <section>
                <h1>Player Selection</h1>
                <input type='text' />
                <button>Join</button>
            </section>
        );
    }
}

export default PlayerSelect;