import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import redux from './redux';
import { theme } from 'constants/theme';

import App from 'components/App';

import 'index.css';
import 'fonts.css';
import 'notyf/notyf.min.css';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  rootElement
);
