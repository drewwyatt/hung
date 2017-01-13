import * as React from 'react';

import { Provider } from 'react-redux';

// import { Router, browserHistory } from 'react-router';
// import routes from '../routes';

export interface RootProps {
    store: any; // TODO
}

export class Root extends React.Component<RootProps, void> {
    render(): JSX.Element {
        const { store } = this.props;
        return (
            <section>
                <Provider store={store}>
                    <div className='container' style={{ padding: '10px' }}>
                        <h1>This is the root</h1>
                        <input type="text" />
                        <p>boom boom power</p>
                    </div>
                </Provider>
            </section>
        );
    }
}

export default Root;