import * as React from 'react';

// import { AppContainer } from 'react-hot-loader';
import Root from './containers/root';
import configureStore from './configure-store';
import { render } from 'react-dom';

// import { browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// const history = syncHistoryWithStore(browserHistory, store);
// render(React.createElement(Root, { store, history }), document.getElementById('root'));

const store = configureStore();

declare var require: any;
declare var module: any;

render(
    <div>
        {React.createElement(Root, { store })}
    </div>,
    document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./containers/root', () => {
    // const RootContainer = require('./containers/root').default;
    render(
      <div>
        <Root store={ store } />
      </div>,
      document.getElementById('root')
    );
  });
}