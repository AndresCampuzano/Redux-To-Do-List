import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import { ThemeProvider } from 'styled-components';
import Variables from './assets/styles/Variables';
import GlobalStyles from './assets/styles/GlobalStyles';
// App
import App from './Pages/Home';

import * as serviceWorker from './serviceWorker';

// Redux
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

// Context > just for modal (for now)
import { ContextModal } from './ContextModal';
import { ContextId } from './ContextId';

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Variables}>
      <GlobalStyles />
      <Provider store={myStore}>
        <ContextModal>
          <ContextId>
            <App />
          </ContextId>
        </ContextModal>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
