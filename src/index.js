import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import {persistor,store} from './redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate loading={null} persistor={persistor}>
  <Provider store={store}>
    <App />
  </Provider>
  </PersistGate>,
);
