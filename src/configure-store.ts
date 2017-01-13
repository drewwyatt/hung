import * as createLogger from 'redux-logger';

import { applyMiddleware, createStore } from 'redux';

import rootReducer from './reducers';

const logger = createLogger();

declare var require: any;
declare var module: any;
export default function configureStore(initialState?: any) {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger));

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default)
    );
  }

  return store;
}

