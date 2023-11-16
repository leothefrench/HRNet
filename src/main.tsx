import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import {Router} from './Router.tsx'
import './index.css';
import store from './features/stores.ts';

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor} >
          <Router />
        </PersistGate>
      </BrowserRouter>    
    </Provider>
  </React.StrictMode>,
)
