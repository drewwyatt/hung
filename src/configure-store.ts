import { compose, createStore } from 'redux';

// import DevTools from './containers/dev-tools';
// import { persistState } from 'redux-devtools';
import rootReducer from './reducers';

// const enhancer = compose(
//   DevTools.instrument(),
//   persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/) as any)
// );

declare var require: any;
declare var module: any;
export default function configureStore(initialState?: any) {
  const store = createStore(rootReducer, initialState);

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default)
    );
  }

  return store;
}

