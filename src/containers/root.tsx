import * as React from 'react';

import App from './app';
import { Provider } from 'react-redux';

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
                        <App />
                    </div>
                </Provider>
            </section>
        );
    }
}

export default Root;