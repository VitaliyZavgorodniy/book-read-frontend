import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import redux from './redux';

import App from 'components/App';

import 'index.css';
import 'fonts.css';
import 'notyf/notyf.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  rootElement
);
